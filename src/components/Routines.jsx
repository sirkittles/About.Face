import React from "react";

const Routines = (props) => {
  console.log(props);
  const products = props.products;
  const productNames = [];

  products.forEach((product) => {
    productNames.push(product.fields.name)
  })
  console.log(productNames)
  // const productNames = products.map((product) => (products.fields.name))

  return (
    <h4>Routines</h4>
  )
}

export default Routines;