import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="single-product">
      <img src="images/grey-bg.jpg" alt="products" />
      <h5>Product Name</h5>
      <p>Some quick example text to build on the card.</p>
    </div>
  );
}
export default ProductCard;
