import React from "react";
import "./login.css";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = ({ setUser }) => {
  const handleUser = () => {
    setUser(true);
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
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <div className="signin-btns">
          <button className="google-signin">
            <FcGoogle size={16} style={{ marginRight: 10 }} />
            Sign in with Google
          </button>
          <button className="apple-signin">
            <FaApple size={16} style={{ marginRight: 10 }} />
            Sign in with Apple
          </button>
        </div>
        <form>
          <label>Email address</label>
          <input type="email" placeholder="Email address" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <p>
            <a href="/">Forgot password?</a>
          </p>
          <button className="blue-signin" onClick={handleUser}>
            Sign In
          </button>
          <p>
            Don’t have an account? <a href="/">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
