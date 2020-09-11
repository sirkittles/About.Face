import React, { useState } from "react";
import axios from "axios";

const CreateLog = (props) => {
  const [dateSaved, setDateSaved] = useState("");
  const [comments, setComments] = useState("");
  const [routine, setRoutine] = useState("");
  const [condition, setCondition] = useState("");
  const [added, setAdded] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      comments,
      dateSaved,
      routine,
      condition,
    };

    await axios.post(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/logs`,
      { fields: fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": `application/json`,
        },
      }
    );
    setComments("");
    setDateSaved("");
    setRoutine("");
    setCondition("");
  };

  const handleClick = () => {
    setAdded(true);
    setTimeout(() => {
      props.setGetLogs(!props.getLogs);
      setAdded(false);
      setToggleAdd(!toggleAdd);
    }, 2000);
  };

  const handleAdd = () => {
    setToggleAdd(!toggleAdd);
  };

  return (
    <div className="create-log-container">
      <button id="log-routine-button" onClick={handleAdd}>{(toggleAdd) ? "Close" : "Log Routine"}</button>
      {toggleAdd && (
        <form className="create-log-form" onSubmit={handleSubmit}>
          <h3>Add Log: </h3>
          <label htmlFor="date-saved"></label>
          <input
            name="dateSaved"
            type="datetime-local"
            placeholder="mm/dd/yyyy"
            value={dateSaved}
            onChange={(e) => setDateSaved(e.target.value)}
          />
          <label htmlFor="routine"></label>
          <input
            name="routine"
            type="text"
            placeholder="routine name"
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
          />
          <label htmlFor="comments"></label>
          <input
            name="comments"
            type="text"
            placeholder="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <label htmlFor="condition"></label>
          <input
            name="condition"
            type="text"
            placeholder="skin condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
          <button type="submit" onClick={handleClick}>{added ? "Posting!" : "Submit"}</button>
        </form>
      )}
    </div>
  );
};

export default CreateLog;
