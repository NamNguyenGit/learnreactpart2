import React from "react";
import PropTypes from "prop-types";

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

function Product(props) {
  const { product } = props;
  return (
    <div className="product-item">
      <p>{product.name}</p>
    </div>
  );
}

export default Product;
