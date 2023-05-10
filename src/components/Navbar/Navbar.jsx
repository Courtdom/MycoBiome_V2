import React from "react";
import "./Navbar.scss";
import { BsSearch } from "react-icons/bs";
import { GiGrassMushroom } from "react-icons/gi";
// import { Badge } from "@material-ui/core";
import { logoImages } from "../../constants/data";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="wrapper">
          <div className="left">
            {/* <span className="language">EN</span> */}
            <div className="languages">
              <img src="/lit.png" alt="" className="lit" />
              <img src="/eng.png" alt="" className="eng" />
            </div>
            <div className="searchContainer">
              <input placeholder="search...."></input>
              <BsSearch className="icon" />
            </div>
          </div>
          <div className="center">
            <img src={"/mycobiome_title.png"} alt="logo" className="logo" />
            {/* <h1 className="text">MycoBiome</h1> */}
          </div>
          <div className="right">
            <div className="menuItem">SHOP</div>
            <div className="menuItem">
              {/* <Badge badgeContent={4} color="primary">
              </Badge> */}
              <GiGrassMushroom />
            </div>
            <div className="menuItem">SIGN IN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
