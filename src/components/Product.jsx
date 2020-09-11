import React from "react";
import axios from "axios";

const Product = (props) => {
  console.log(props);
  const { name } = props.product.fields;
  // const { getProducts, setGetProducts } = props;

  return (
    <div className="product-container">
      <ul>
        <li>
          {name}
        </li>
      </ul>
    </div>
  );
};

export default Product;