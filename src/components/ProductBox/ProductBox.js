import React from "react";
import "./ProductBox.scss";

const ProductBox = (props) => {
  return (
    <div className="product__wrapper">
        {props.offerBanner && props.offerBanner}
      <div className="product__box-title">
        <h2>{props.title}</h2>
      </div>
      <div className="product__box-content">
        {props.children}      
        </div> 
    </div>
  );
};

export default ProductBox;



