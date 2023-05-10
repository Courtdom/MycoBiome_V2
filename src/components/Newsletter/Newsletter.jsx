import React from "react";
import "./Newsletter.scss";
import { RiSendPlane2Fill } from "react-icons/ri";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="wrapper">
          <div className="newsletterContainer">
            <h1>Newsletter</h1>
            <div className="inputContainer">
              <input type="text" placeholder="Your Email" />
              <button>
                <RiSendPlane2Fill />
              </button>
            </div>
            <p>Get timely updates from MycoBiome</p>
          </div>
          <div className="imgContainer">
            <img src="/newsletter.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
