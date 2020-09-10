import React from "react";

const Routines = (props) => {
  console.log(props);
  const products = props.products;
  const routines = props.routines;
  // console.log(routines);
  // const { firstCleanser, secondCleanser, toner, essence, serum, moisturizer, faceOil, sunscreen } = routines.fields;

  const productNames = products.map((product) => <p key={product.id}>{product.fields.name}</p>);

  return (
    <div className="routines-list-container">
      {routines.map((routine, i) => (
        <div key={i} className="routine">
          <h4>{routine.fields.name}</h4>
          <p>{routine.fields.moisturizer}</p>
          {/* {(routine.fields.firstCleanser) ?
            <p>First Cleanser: {routine.fields.firstCleanser}</p>
            : ""
          }
          {(routine.fields.secondCleanser) ?
            <p>Second Cleanser: {routine.fields.secondCleanser}</p>
            : ""
          }
          {(routine.fields.toner) ?
            <p>Toner: {routine.fields.toner}</p>
            : ""
          }
          {(routine.fields.essence) ?
            <p>Essence: {routine.fields.essence}</p>
            : ""
          }
          {(routine.fields.serum) ?
            <p>Serum: {routine.fields.serum}</p>
            : ""
          }
          {(routine.fields.moisturizer) ?
            <p>Moisturizer: {routine.fields.moisturizer}</p>
            : ""
          }
          {(routine.fields.faceOil) ?
            <p>Face Oil: {routine.fields.faceOil}</p>
            : ""
          }
          {(routine.fields.sunscreen) ?
            <p>Sunscreen: {routine.fields.sunscreen}</p>
            : ""
          } */}
        </div>
      ))}
    </div>
  )
}

export default Routines;