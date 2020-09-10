import React, { useState } from "react";
import axios from "axios";

const EditRoutine = (props) => {
  const { routine, getRoutines, setGetRoutines } = props;
  const [name, setName] = useState(routine.fields.name);

  return (
    <div className="edit-routine-container">
      <form >
        <label htmlFor="editRoutine">Edit Routine: </label>
        <input
          name="name"
          type="text"
          placeholder="routine name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default EditRoutine;
