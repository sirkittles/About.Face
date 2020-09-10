import React from "react";

const RoutineInputs = () => {
  return (
    <div className="routine-inputs">
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
    </div>
  );
};

export default RoutineInputs;
