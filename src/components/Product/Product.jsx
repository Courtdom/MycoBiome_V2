import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import "./Product.scss";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="container">
        <img src={item.img} alt="product" />

        <div className="info">
          <div className="icon">
            <BsCart2 />
          </div>
          <div className="icon">
            <BiSearchAlt />
          </div>
          <div className="icon">
            <MdFavoriteBorder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
