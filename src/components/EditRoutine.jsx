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
        <label htmlFor="first-cleanser">first cleanser</label>
          <select
            name="firstCleanser"
            type="text"
            id="firstCleanser-select"
            value={firstCleanser}
            onChange={(e) => setFirstCleanser(e.target.value)}
          >
            <option value="">select</option>
            {productNames.map((product, i) => {
              return (
                <option key={i} >
                  {product}
                </option>
              );
            })}
            ;
          </select>
          <label htmlFor="second-cleanser">second cleanser</label>
          <select
            name="secondCleanser"
            type="text"
            id="secondCleanser-select"
            value={secondCleanser}
            onChange={(e) => setSecondCleanser(e.target.value)}
          >
            <option value="">select</option>
            {productNames.map((product, i) => {
              return (
                <option key={i}>
                  {product}
                </option>
              );
            })}
            ;
          </select>
          <label htmlFor="toner">toner</label>
          <select
            name="toner"
            type="text"
            id="toner-select"
            value={toner}
            onChange={(e) => setToner(e.target.value)}
          >
            <option value="">select</option>
            {productNames.map((product, i) => {
              return (
                <option key={i}>
                  {product}
                </option>
              );
            })}
            ;
          </select>
          <label htmlFor="essence">essence</label>
          <select
            name="essence"
            type="text"
            id="essence-select"
            value={essence}
            onChange={(e) => setEssence(e.target.value)}
          >
            <option value="">select</option>
            {productNames.map((product, i) => {
              return (
                <option key={i}>
                  {product}
                </option>
              );
            })}
            ;
          </select>
          <label htmlFor="serum">serum</label>
          <select
            name="serum"
            type="text"
            id="serum-select"
            value={serum}
            onChange={(e) => setSerum(e.target.value)}
          >
            <option value="">select</option>
            {productNames.map((product, i) => {
              return (
                <option key={i}>
                  {product}
                </option>
              );
            })}
            ;
          </select>
          <label htmlFor="moisturizer">moisturizer</label>
          <select
            name="moisturizer"
            type="text"
            id="moisturizer-select"
            value={moisturizer}
            onChange={(e) => setMoisturizer(e.target.value)}
          >
            <option value="">select</option>
            {productNames.map((product, i) => {
              return (
                <option key={i}>
                  {product}
                </option>
              );
            })}
            ;
          </select>
          <label htmlFor="face-oil">face oil</label>
          <select
            name="faceOil"
            type="text"
            id="faceOil-select"
            value={faceOil}
            onChange={(e) => setFaceOil(e.target.value)}
          >
            <option value="">select</option>
            {productNames.map((product, i) => {
              return (
                <option key={i}>
                  {product}
                </option>
              );
            })}
            ;
          </select>
          <label htmlFor="sunscreen">sunscreen</label>
          <select
            name="sunscreen"
            type="text"
            id="sunscreen-select"
            value={sunscreen}
            onChange={(e) => setSunscreen(e.target.value)}
          >
            <option value="">select</option>
            {productNames.map((product, i) => {
              return (
                <option key={i}>
                  {product}
                </option>
              );
            })}
            ;
          </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditRoutine;
