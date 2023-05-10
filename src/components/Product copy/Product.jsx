import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Product.scss";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="container">
        <div className="circle" />

        <img src={item.img} alt="product" />

        <div className="info">
          <div className="icon">
            <AiOutlineShoppingCart />
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
