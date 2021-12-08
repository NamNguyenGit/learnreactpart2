import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react/cjs/react.production.min";
import Product from "../Product";

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
};

function ProductList(props) {
  const { productList } = props;
  return (
    <Fragment>
      <ul>
        {productList.map((productItem) => {
          return (
            <li style={{ listStyle: "none" }} key={productItem.id}>
              <Product product={productItem} />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default ProductList;
