import React, { useState } from "react";
import axios from "axios";
import EditLog from "./EditLog";

const Logs = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { condition, comments, routine } = props.log.fields;
  const { getLogs, setGetLogs, log } = props;

  // changing format of date/time data;
  const datetime = new Date(log.fields.dateSaved);
  const dateSaved = datetime.toDateString();
  const [timeSaved] = datetime.toTimeString().split(' ');
  console.log(dateSaved);
  console.log(timeSaved);

  const handleDelete = async () => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/logs/${log.id}`;
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    setDeleted(true);
    setTimeout(() => {
      setGetLogs(!getLogs);
    }, 2000);
  };

  const handleClick = () => {
    setToggleEdit(!toggleEdit);
  };

  return (
    <div className="log-post-container">
      <div className="log-post-content">
        <h2>
          {dateSaved} {timeSaved}
        </h2>
        <h2>{routine}</h2>
        <p>{comments}</p>
        <p>Skin Condition: {condition}</p>
        <div className="edit-log-section">
          {toggleEdit && (
            <EditLog
              log={log}
              getLogs={getLogs}
              setGetLogs={setGetLogs}
            />
          )}
          <button onClick={handleDelete}>{deleted ? 'Deleting!' : 'Delete'}</button>
          <button onClick={handleClick}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Logs;
