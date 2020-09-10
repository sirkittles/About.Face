import React, { useState } from "react";
import axios from "axios";

const AddRoutine = (props) => {
  const [name, setName] = useState('');
  const [firstCleanser, setFirstCleanser] = useState('');
  const [secondCleanser, setSecondCleanser] = useState('');
  const [toner, setToner] = useState('');
  const [essence, setEssence] = useState('');
  const [serum, setSerum] = useState('');
  const [moisturizer, setMoisturizer] = useState('');
  const [faceOil, setFaceOil] = useState('');
  const [sunscreen, setSunscreen] = useState('');

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
      sunscreen
    };

    await axios.post(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/routines`, { fields: fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': `application/json`,
      }
    });
  }

  return (
    <div className="add-routine-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="add-routine">Add Routine: </label>
        <input
          name="name"
          type="text"
          placeholder="routine name"
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
  )
}

export default AddRoutine;