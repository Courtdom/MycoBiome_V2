import React from "react";
import "./Footer.scss";
import {
  BsFacebook,
  BsLinkedin,
  BsTiktok,
  BsFillPinMapFill,
  BsFillPhoneFill,
} from "react-icons/bs";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <ul className="links">
            <li className="link">About</li>
            <li className="link">Contact</li>
            <li className="link">Orders</li>

            <li className="link">Blog</li>
            <li className="link">Terms</li>
          </ul>
        </div>
        <div className="center">
          <div className="imgContainer">
            <img src="/mycobiome_logo.png" alt="logo" />
          </div>
          <div className="socialContainer">
            <div className="socialIcon">
              <BsFacebook />
            </div>
            <div className="socialIcon">
              <AiFillInstagram />
            </div>
            <div className="socialIcon">
              <BsLinkedin />
            </div>
            <div className="socialIcon">
              <BsTiktok />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="contactContainer">
            <div className="contactItem">
              Donatas Farm, deep in the woods, Lithuiania
              <BsFillPinMapFill style={{ color: "crimson" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
