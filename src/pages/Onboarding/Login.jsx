import React, { useState } from "react";
import "./Login.css";
import googleLogo from "../../assets/googleLogo.png";
import appleLogo from "../../assets/appleLogo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-left">
        <div className="login-form-container">
          <h1 className="welcome-text">WELCOME TO ADEN</h1>

          <form>
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-with-dropdown">
                <input type="email" id="email" placeholder="example@chakrqi" />
                <select>
                  <option value=".com">.com</option>
                  <option value=".net">.net</option>
                  <option value=".org">.org</option>
                </select>
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                />
                <span
                  className="icon"
                  onClick={togglePassword}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? (
                    <i className="ri-eye-line"></i>
                  ) : (
                    <i className="ri-eye-off-line"></i>
                  )}
                </span>
              </div>
            </div>

            {/* Log In Button */}
            <button type="submit" className="log-in-button">
              <span className="btn-text">Log In</span>
              <span className="arrow">
                <i className="ri-arrow-right-line"></i>
              </span>
            </button>

            {/* Remember Me & Forgot Password */}
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            {/* OR Separator */}
            <div className="or-separator">
              <span>or</span>
            </div>

            {/* Social Buttons */}
            <button type="button" className="social-button google">
              <img src={googleLogo} alt="Google" /> Sign in with Google
            </button>
            <button type="button" className="social-button apple">
              <img src={appleLogo} alt="Apple" /> Sign in with Apple
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? Get Started <a href="#">here</a>.
          </p>
        </div>
      </div>

      <div className="onboarding-right">
        <div className="hero-content">
          <h2 className="hero-text">
            MEET YOUR
            <br />
            HEALTH
            <br />
            TWIN
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
