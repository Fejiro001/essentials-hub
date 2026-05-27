import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuX } from "react-icons/lu";

function LoginModal(props) {
  const { isLoginModalOpen, setIsLoginModalOpen } = props;
  const [authMode, setAuthMode] = useState("login");
  const isSignUp = authMode === "signup";

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // If user is signed up, compare their login details from localStorage and log them in. If not, create a new user and store their details in localStorage.

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <div className="modal-header">
          <h2>{isSignUp ? "Join Essentials Hub" : "Welcome Back"}</h2>
          <button className="close-btn">
            <LuX />
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit(() => {})}>
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
