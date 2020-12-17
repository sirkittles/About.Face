import React from "react";

const Product = (props) => {
  const { name } = props.product.fields;
  const { type } = props.product.fields;
  console.log(props)
  console.log(type)
  return (
    <div className="product-container">
      <ul>
        <li>
          {name}
        </li>
        <li>
          {type}
        </li>
        <li>
          <button>edit</button>
          <button>delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Product;