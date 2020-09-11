import React from "react";

const Product = (props) => {
  const { name } = props.product.fields;

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