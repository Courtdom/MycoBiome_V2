import React from "react";
import "./ProductList.scss";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const ProductList = () => {
  return (
    <div className="productList">
      <div className="container">
        <Navbar />
        <Announcement />
        <h1 className="header">Live Cultures</h1>
        <div className="filterContainer">
          <div className="filter">
            <span>Filter Products :</span>
            <select>
              <option disabled selected>
                Fungi Strain
              </option>
              <option>Lion's Mane</option>
              <option>Yellow Oyster</option>
              <option>Pink Oyster</option>
              <option>Shitake 1</option>
              <option>Shitake 2</option>
              <option>All</option>
            </select>
          </div>
          <div className="filter">
            <span>Sort Products :</span>
            <select>
              <option selected>Newest</option>
              <option>Best Selling</option>
              <option>Price Low-High</option>
              <option>Price High-Low</option>
            </select>
          </div>
        </div>
        <Products />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
