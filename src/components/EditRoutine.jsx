import React, { useState } from "react";
import axios from "axios";

const EditRoutine = (props) => {
  const { routine, getRoutines, setGetRoutines, productNames } = props;
  const [name, setName] = useState(routine.fields.name);
  const [firstCleanser, setFirstCleanser] = useState(routine.fields.firstCleanser);
  const [secondCleanser, setSecondCleanser] = useState(routine.fields.secondCleanser);
  const [toner, setToner] = useState(routine.fields.toner);
  const [essence, setEssence] = useState(routine.fields.essence);
  const [serum, setSerum] = useState(routine.fields.serum);
  const [moisturizer, setMoisturizer] = useState(routine.fields.moisturizer);
  const [faceOil, setFaceOil] = useState(routine.fields.faceOil);
  const [sunscreen, setSunscreen] = useState(routine.fields.sunscreen);
  // console.log(props);
  console.log(productNames);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      firstCleanser,
      secondCleanser,
      toner,
      essence,
      serum,
      moisturizer,
      faceOil,
      sunscreen,
    };

    await axios.put(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/routines/${routine.id}`, { fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': `application/json`,
      },
    });
    setGetRoutines(!getRoutines);
    window.location.reload(false);
  }

  return (
    <div className="edit-routine-container">
      <form onSubmit={handleSubmit}>
        <h3>Edit Routine: </h3>
        <label htmlFor="name">routine name</label>
        <input
          name="name"
          type="text"
          placeholder="select"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="firstCleanser"
          type="text"
          placeholder="first cleanser"
          value={firstCleanser}
          onChange={(e) => setFirstCleanser(e.target.value)}
        />
        <input
          name="secondCleanser"
          type="text"
          placeholder="second cleanser"
          value={secondCleanser}
          onChange={(e) => setSecondCleanser(e.target.value)}
        />
        <input
          name="toner"
          type="text"
          placeholder="toner"
          value={toner}
          onChange={(e) => setToner(e.target.value)}
        />
        <input
          name="essence"
          type="text"
          placeholder="essence"
          value={essence}
          onChange={(e) => setEssence(e.target.value)}
        />
        <input
          name="serum"
          type="text"
          placeholder="serum"
          value={serum}
          onChange={(e) => setSerum(e.target.value)}
        />
        <input
          name="moisturizer"
          type="text"
          placeholder="moisturizer"
          value={moisturizer}
          onChange={(e) => setMoisturizer(e.target.value)}
        />
        <input
          name="faceOil"
          type="text"
          placeholder="face oil"
          value={faceOil}
          onChange={(e) => setFaceOil(e.target.value)}
        />
        <input
          name="sunscreen"
          type="text"
          placeholder="sunscreen"
          value={sunscreen}
          onChange={(e) => setSunscreen(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditRoutine;
