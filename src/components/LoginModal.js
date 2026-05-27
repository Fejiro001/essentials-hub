import { useForm } from "react-hook-form";
import { LuX } from "react-icons/lu";

function LoginModal() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Welcome Back</h2>
          <button>
            <LuX />
          </button>
        </div>
        <form className="modal-form" onSubmit={handleSubmit(() => {})}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span className="error">Valid email is required</span>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && <span className="error">Password must be at least 6 characters</span>}
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>
          New here? <button type="button">Create an account</button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
