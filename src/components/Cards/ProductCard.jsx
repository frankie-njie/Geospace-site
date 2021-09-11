import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="single-product">
      <img src="images/grey-bg.jpg" alt="products" />
      <h5>{props.name}</h5>
      <p>{props.description}</p>
    </div>
  );
}
export default ProductCard;
