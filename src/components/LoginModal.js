import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LuX } from "react-icons/lu";
import { useAuthStore } from "../stores/authStore";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useRef } from "react";

function LoginModal(props) {
  const { setIsLoginModalOpen, authMode, setAuthMode } = props;
  const isSignUp = authMode === "signup";

  const login = useAuthStore((state) => state.login);
  const signup = useAuthStore((state) => state.signup);
  const loginModalRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useOutsideClick(loginModalRef, () => {
    setIsLoginModalOpen(false);
  });

  const handleLogin = (data) => {
    const result = login(data.email, data.password);
    if (result?.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Login successful!");
    setIsLoginModalOpen(false);
    reset();
  };

  const handleSignUp = (data) => {
    const result = signup(data);

    if (result?.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Account created successfully!");
    setIsLoginModalOpen(false);
    reset();
  };

  return (
    <div className="modal-overlay">
      <div ref={loginModalRef} className="login-modal">
        <div className="modal-header">
          <h2>{isSignUp ? "Join Essentials Hub" : "Welcome Back"}</h2>
          <button
            className="close-btn"
            onClick={() => setIsLoginModalOpen(false)}>
            <LuX />
          </button>
        </div>
        <form
          className="modal-form"
          onSubmit={handleSubmit(isSignUp ? handleSignUp : handleLogin)}>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="error">Name is required</span>}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="error">Valid email is required</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <span className="error">
                Password must be at least 6 characters
              </span>
            )}
          </div>
          <button type="submit" className="login-btn">
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>
        <p className="signup-link">
          {isSignUp ? "Already have an account?" : "New here?"}
          <button
            type="button"
            className="create-account-btn"
            onClick={() => setAuthMode(isSignUp ? "login" : "signup")}>
            {isSignUp ? "Sign In" : "Create an account"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
