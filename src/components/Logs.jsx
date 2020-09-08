import React from "react";

const Logs = (props) => {
  console.log(props.log.fields);
  const { condition, comments, routine } = props.log.fields;
  let { dateSaved } = props.log.fields;
  dateSaved = dateSaved.split("T");
  dateSaved[1] = dateSaved[1].slice(0, 8);
  dateSaved = dateSaved.join(" ");
  console.log(dateSaved);
  return (
    <div className="logs-container">
      <h2>{dateSaved}</h2>
      <h2>{routine}</h2>
      <p>{comments}</p>
      <p>{condition}</p>
    </div>
  );
};

export default Logs;
