import React from "react";
import DeleteRoutine from "./DeleteRoutine";

const Routines = (props) => {
  const products = props.products;
  const routines = props.routines;
  const { getRoutines, setGetRoutines } = props;
  console.log(props);

  const productNames = products.map((product) => <p key={product.id}>{product.fields.name}</p>);
  // const id = routines.map((routine) => (routine.id));

  return (
    <div className="routines-list-container">
      {routines.map((routine, i) => (
        <div key={i} className="routine">
          <h4>{routine.fields.name}</h4>
          {(routine.fields.firstCleanser) ?
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
          }
          <div className="edit-routine-section">
            <DeleteRoutine
              routine={routine}
              getRoutines={getRoutines}
              setGetRoutines={setGetRoutines}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Routines;