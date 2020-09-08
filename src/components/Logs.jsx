import React from "react";
import axios from "axios";

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

  const handleDelete = async () => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/logs/${log.id}`;
    await axios.delete(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    setGetLogs(!getLogs);
  }

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
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Logs;
