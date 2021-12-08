import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import ProductList from "./Components/ProductList";

function ProductFeatures(props) {
  const dataProductList = [
    {
      id: 1,
      name: "Product 1 ",
      image: "./images/1.jpg",
    },
    {
      id: 2,
      name: "Product 2 ",
      image: "./images/2.JPG",
    },
    {
      id: 3,
      name: "Product 3 ",
      image: "./images/3.jpg",
    },
  ];

  return (
    <Fragment>
      <h2>Favourite Product</h2>
      <ProductList productList={dataProductList} />
    </Fragment>
  );
}

export default ProductFeatures;
