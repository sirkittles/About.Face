import React, { useState } from 'react';
import axios from 'axios';

const EditLog = (props) => {
  const { getLogs, setGetLogs, log } = props;
  const [dateSaved, setDateSaved] = useState(props.log.fields.dateSaved);
  const [comments, setComments] = useState(props.log.fields.comments);
  const [routine, setRoutine] = useState(props.log.fields.routine);
  const [condition, setCondition] = useState(props.log.fields.condition);
  // console.log(props.log.fields.condition)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      comments,
      dateSaved,
      routine,
      condition,
    };

    await axios.put(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/logs/${log.id}`, { fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': `application/json`,
      }
    });
    setGetLogs(!getLogs);
  }

  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="edit">Edit Log:</label>
        <input
          name="dateSaved"
          type="text"
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
          onChange={(e) => setCondition(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditLog;