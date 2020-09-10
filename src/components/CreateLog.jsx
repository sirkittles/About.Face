import React, { useState } from 'react';
import axios from 'axios';

const CreateLog = (props) => {
  const [dateSaved, setDateSaved] = useState('');
  const [comments, setComments] = useState('');
  const [routine, setRoutine] = useState('');
  const [condition, setCondition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      comments,
      dateSaved,
      routine,
      condition,
    };

    await axios.post(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/logs`, { fields: fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': `application/json`,
      }
    });
    props.setGetLogs(!props.getLogs);
    setComments('');
    setDateSaved('');
    setRoutine('');
    setCondition('');
  }

  return (
    <div className="create-log-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="add-log">Add Log: </label>
        <input
          name="dateSaved"
          type="datetime-local"
          placeholder="mm/dd/yyyy"
          value={dateSaved}
          onChange={(e) => setDateSaved(e.target.value)}
        />
        <input
          name="routine"
          type="text"
          placeholder="routine"
          value={routine}
          onChange={(e) => setRoutine(e.target.value)}
        />
        <input
          name="comments"
          type="text"
          placeholder="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <input
          name="condition"
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateLog;