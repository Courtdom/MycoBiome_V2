import React from "react";
import "./CategoryItem.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className="item">
      <div className="container">
        <div className="imgContainer">
          <img src={item.img} alt="img" />
        </div>
        <div className="infoContainer">
          <h1>{item.title}</h1>
          <button>{item.btn}</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
