import React from "react";
import { popularProducts } from "../../constants/data";
import Product from "../Product/Product";
import "./Products.scss";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
