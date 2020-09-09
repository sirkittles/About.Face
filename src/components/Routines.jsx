import React from "react";

const Routines = (props) => {
  console.log(props);
  const products = props.products;
  const routines = props.routines;
  console.log(routines);
  const productNames = [];

  products.forEach((product) => {
    productNames.push(product.fields.name)
  })
  console.log(productNames)
  // const productNames = products.map((product) => (products.fields.name))

  return (
    <div className="routines-list-container">

    </div>
  )
}

export default Routines;