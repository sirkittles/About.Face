import React, { useState } from "react";
import axios from "axios";
// import RoutineInputs from "./RoutineInputs";

const AddRoutine = (props) => {
  const [added, setAdded] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [name, setName] = useState("");
  const [firstCleanser, setFirstCleanser] = useState("");
  const [secondCleanser, setSecondCleanser] = useState("");
  const [toner, setToner] = useState("");
  const [essence, setEssence] = useState("");
  const [serum, setSerum] = useState("");
  const [moisturizer, setMoisturizer] = useState("");
  const [faceOil, setFaceOil] = useState("");
  const [sunscreen, setSunscreen] = useState("");
  const { products } = props;
  // console.log(products);
  const productNames = [];
  products.forEach((product) => productNames.push(product.fields.name));
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

    await axios.post(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/routines`,
      { fields: fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": `application/json`,
        },
      }
    );
    setName("");
    setFirstCleanser("");
    setSecondCleanser("");
    setToner("");
    setEssence("");
    setSerum("");
    setMoisturizer("");
    setFaceOil("");
    setSunscreen("");
  };

  const handleClick = () => {
    setAdded(true);
    setTimeout(() => {
      props.setGetRoutines(!props.getRoutines);
      setAdded(false);
      setToggleAdd(!toggleAdd);
    }, 2000);
  };

  const handleAdd = () => {
    setToggleAdd(!toggleAdd);
  };

  return (
    <div className="add-routine-container">
      <button onClick={handleAdd}>Add Routine</button>
      {toggleAdd && (
        <form onSubmit={handleSubmit}>
          <h3>Add Routine: </h3>
          <label htmlFor="routine-name">routine name</label>
          <input
            name="name"
            type="text"
            placeholder="routine name"
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
          <button type="submit" onClick={handleClick}>
            {added ? "Adding!" : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default AddRoutine;
