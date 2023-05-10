import React from "react";
import "./ProductPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const ProductPage = () => {
  return (
    <div className="productPage">
      <div className="container">
        <Navbar />
        <Announcement />
        <div className="productPageWrapper">
          <div className="imgContainer">
            <img src="/syringe_pedestal.jpg" alt="product" />
          </div>
          <div className="infoContainer">
            <h1 className="title">Lion's Mane Mushroom</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              quam excepturi alias temporibus sed reprehenderit, quas ea
              corrupti quasi possimus iusto id illo dicta laudantium nemo
              dolorum repellat repudiandae soluta recusandae reiciendis! Odit,
              soluta ut.
            </p>
            <div className="filterContainer">
              <div className="filter">
                <span className="filterTitle">Size</span>
                <select className="filterSize">
                  <option className="filterSizeOption">10ml</option>
                  <option className="filterSizeOption">20ml</option>
                  <option className="filterSizeOption">50ml</option>
                  <option className="filterSizeOption">100ml</option>
                  <option className="filterSizeOption">200ml</option>
                </select>
              </div>
              <span className="price">£15</span>
            </div>
            <div className="qtyContainer">
              <div className="amountContainer">
                <AiFillMinusCircle className="icon" />
                <span className="amount">3</span>
                <AiFillPlusCircle className="icon" />
              </div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
