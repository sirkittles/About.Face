import React from "react";

const Product = (props) => {
  console.log(props);
  const { name } = props.product.fields;
  console.log(name);

  return (
    <div className="products-list-container">
      <ul>
        <li>
          {name}
        </li>
      </ul>
    </div>
  );
};

export default Product;