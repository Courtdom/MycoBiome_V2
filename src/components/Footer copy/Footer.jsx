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
          <h1 className="logo">MycoBiome.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facere
            deserunt iure aspernatur explicabo, nostrum ducimus assumenda atque
            illo. Natus sapiente cumque saepe laborum. Animi?
          </p>
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
        <div className="center">
          <h3>Useful Links</h3>
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Live Cultures</li>
            <li>Grow Kits</li>
            <li>Fresh Mushrooms</li>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>About</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="right">
          <h3>Contact</h3>
          <div className="contactItem">
            Donatas Farm, middle of nowhere, lithuiania
            <BsFillPinMapFill style={{ color: "crimson" }} />
          </div>
          <div className="contactItem">
            +44 7529 5188 <BsFillPhoneFill style={{ color: "slategrey" }} />
          </div>
          <div className="contactItem">
            mycobiome@gmail.com{" "}
            <AiFillMail style={{ color: "rgb(178, 178, 149)" }} />
          </div>
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
