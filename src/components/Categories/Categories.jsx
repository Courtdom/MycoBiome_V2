import React from "react";
import "./Categories.scss";
import { categories } from "../../constants/data";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
