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
            <p><span className="bold-text">First Cleanser: </span>{routine.fields.firstCleanser}</p>
            : ""
          }
          {(routine.fields.secondCleanser) ?
            <p><span className="bold-text">Second Cleanser: </span>{routine.fields.secondCleanser}</p>
            : ""
          }
          {(routine.fields.toner) ?
            <p><span className="bold-text">Toner: </span>{routine.fields.toner}</p>
            : ""
          }
          {(routine.fields.essence) ?
            <p><span className="bold-text">Essence: </span>{routine.fields.essence}</p>
            : ""
          }
          {(routine.fields.serum) ?
            <p><span className="bold-text">Serum: </span>{routine.fields.serum}</p>
            : ""
          }
          {(routine.fields.moisturizer) ?
            <p><span className="bold-text">Moisturizer: </span>{routine.fields.moisturizer}</p>
            : ""
          }
          {(routine.fields.faceOil) ?
            <p><span className="bold-text">Face Oil: </span>{routine.fields.faceOil}</p>
            : ""
          }
          {(routine.fields.sunscreen) ?
            <p><span className="bold-text">Sunscreen: </span>{routine.fields.sunscreen}</p>
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
            <button onClick={handleClick}>{(toggleEdit) ? "Close" : "Edit"}</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Routines;