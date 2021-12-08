import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

function Product(props) {
  const { product } = props;
  return (
    <div className="product-item">
      <div className="product_thumbnail">
        <img className="img-product" src={product.img} alt={product.name}></img>
      </div>
      <p className="product_name">{product.name}</p>
    </div>
  );
}

export default Product;
