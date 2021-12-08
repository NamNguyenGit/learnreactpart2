import React from "react";
import { Fragment } from "react";
import ProductList from "./Components/ProductList";
import img1 from "./images/1.jpg";
import img2 from "./images/2.JPG";
import img3 from "./images/3.jpg";

function ProductFeatures(props) {
  const dataProductList = [
    {
      id: 1,
      name: "FLORALE DAHLIA",
      img: img1,
    },
    {
      id: 2,
      name: "FLORALE ROSE",
      img: img2,
    },
    {
      id: 3,
      name: "FLORALE VIOLET",
      img: img3,
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
