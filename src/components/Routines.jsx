import React from "react";

const Routines = (props) => {
  console.log(props);
  const products = props.products;
  const routines = props.routines;
  console.log(routines);
  const productNames = products.map((product) => <p key={product.id}>{product.fields.name}</p>);



  return (
    <div className="routines-list-container">

    </div>
  )
}

export default Routines;