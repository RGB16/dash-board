import React, { useState } from "react";
import "./login.css";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = ({ setUser }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleUser = () => {
    setUser(true);
  };

  const toggleMode = (event) => {
    event.preventDefault(); 
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="login-page">
      <div className="left">
        <div className="logo">LOGO</div>
        <h1 className="board">Board.</h1>
        <div className="social-icons">
          <FaGithub size={36} color="white" />
          <AiFillTwitterCircle size={36} color="white" />
          <AiFillLinkedin size={38} color="white" />
          <BiLogoDiscord size={48} color="white" />
        </div>
      </div>

      <div className="right">
        <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
        <p>{isSignIn ? "Sign in to your account" : "Create a new account"}</p>
        <div className="signin-btns">
          <button className="google-signin">
            <FcGoogle size={16} style={{ marginRight: 10 }} />
            {isSignIn ? "Sign in with Google" : "Sign up with Google"}
          </button>
          <button className="apple-signin">
            <FaApple size={16} style={{ marginRight: 10 }} />
            {isSignIn ? "Sign in with Apple" : "Sign up with Apple"}
          </button>
        </div>
        <form>
          <label>Email address</label>
          <input type="email" placeholder="Email address" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <p>
            <a   href="/" onClick={toggleMode}>
              {isSignIn ? "Forgot password?" : "Remember your password?"}
            </a>
          </p>
          <button className="blue-signin" onClick={handleUser}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p id="text">
            {isSignIn
              ? "Don’t have an account? "
              : "Already have an account? "}
            <a href="/" onClick={toggleMode}>
              {isSignIn ? "Register here" : "Sign In"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
