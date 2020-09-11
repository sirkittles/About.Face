import React, { useState } from "react";
import DeleteRoutine from "./DeleteRoutine";
import EditRoutine from "./EditRoutine";

const Routines = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const products = props.products;
  const routines = props.routines;
  const { getRoutines, setGetRoutines } = props;

  const productNames = []
  products.forEach((product) => productNames.push(product.fields.name))

  const handleClick = () => {
    setToggleEdit(!toggleEdit);
  }

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
            {toggleEdit && (
              <EditRoutine
                routine={routine}
                getRoutines={getRoutines}
                setGetRoutines={setGetRoutines}
                productNames={productNames}
              />
            )}
            <DeleteRoutine
              routine={routine}
              getRoutines={getRoutines}
              setGetRoutines={setGetRoutines}
            />
            <button onClick={handleClick}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Routines;