import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="wrapper">
          <h1 className="title">Sign In</h1>
          <form>
            <input placeholder="username" />
            <input type="password" placeholder="password" />
            <button className="btn">LOGIN</button>
            <div className="linkContainer">
              <a className="link">Forgot your password?</a>
              <a className="link">Create a new account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
