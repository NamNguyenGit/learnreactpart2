import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react/cjs/react.production.min";
import Product from "../Product";
import "./style.scss";

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
};

function ProductList(props) {
  const { productList } = props;
  return (
    <Fragment>
      <ul className="product_list">
        {productList.map((productItem) => {
          return (
            <li key={productItem.id}>
              <Product product={productItem} />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default ProductList;
