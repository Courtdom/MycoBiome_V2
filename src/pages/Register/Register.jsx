import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="wrapper">
          <h1 className="title">CREATE AN ACCOUNT</h1>
          <form>
            <input placeholder="first name" type="text" />
            <input placeholder="last name" type="text" />
            <input placeholder="username" type="text" />
            <input placeholder="email" type="text" />
            <input placeholder="password" type="password" />
            <input placeholder="confirm password" type="password" />
            <span className="agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button className="btn">CREATE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
