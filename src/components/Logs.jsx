import React, { useState } from "react";
import axios from "axios";
import EditLog from "./EditLog";

const Logs = (props) => {
  // console.log(props.log.fields);
  const { condition, comments, routine } = props.log.fields;
  const { getLogs, setGetLogs, log } = props;
  let { dateSaved } = props.log.fields;
  dateSaved = dateSaved.split("T");
  let timeSaved = dateSaved[1].slice(0, 8);
  dateSaved = dateSaved[0];
  dateSaved = new Date(dateSaved.replace(/-/g, "/"));
  dateSaved = dateSaved.toDateString();
  // console.log(dateSaved);
  // console.log(timeSaved);
  // console.log(log.id)
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleDelete = async () => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/logs/${log.id}`;
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    setGetLogs(!getLogs);
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
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleClick}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Logs;
