import React from "react";

const Routines = (props) => {
  console.log(props);
  const products = props.products;
  const routines = props.routines;
  console.log(routines);
  // const { firstCleanser, secondCleanser, toner, essence, serum, moisturizer, faceOil, sunscreen } = routines.fields;

  const productNames = products.map((product) => <p key={product.id}>{product.fields.name}</p>);

  return (
    <div className="routines-list-container">
      {routines.map((routine, i) => (
        <div key={i} className="routine">
          <h4>{routine.fields.name}</h4>
          {(routine.fields.firstCleanser) ? 
            <p>First Cleanser: {routine.fields.firstCleanser}</p>
            : ""
          }
        </div>
      ))}
    </div>
  )
}

export default Routines;