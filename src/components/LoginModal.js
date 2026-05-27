import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LuX } from "react-icons/lu";

function LoginModal(props) {
  const { setIsLoginModalOpen, authMode, setAuthMode } = props;
  const isSignUp = authMode === "signup";

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleLogin = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.error("No user found. Please sign up first.");
      return;
    }

    if (
      storedUser &&
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      toast.success("Login successful!");
      setIsLoginModalOpen(false);
    } else {
      toast.error("Invalid email or password");
    }
  };

  const handleSignUp = (data) => {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    toast.success("Account created successfully!");
    setAuthMode("login");
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
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
