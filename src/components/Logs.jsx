import React from "react";

const Logs = (props) => {
  console.log(props.log.fields);
  const { condition, comments, routine } = props.log.fields;
  let { dateSaved } = props.log.fields;
  dateSaved = dateSaved.split("T");
  let timeSaved = dateSaved[1].slice(0, 8);
  dateSaved = dateSaved[0];
  dateSaved = new Date(dateSaved.replace(/-/g, "/"));
  dateSaved = dateSaved.toDateString();
  console.log(dateSaved);
  console.log(timeSaved);
  return (
    <div className="log-post-container">
      <div className="log-post-content">
        <h2>
          {dateSaved} {timeSaved}
        </h2>
        <h2>{routine}</h2>
        <p>{comments}</p>
        <p>{condition}</p>
      </div>
    </div>
  );
};

export default Logs;
