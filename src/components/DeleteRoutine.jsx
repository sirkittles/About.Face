import React, { useState } from "react";
import axios from "axios";

const DeleteRoutine = (props) => {
  // console.log(props);
  const [deleted, setDeleted] = useState(false);
  const { routine, getRoutines, setGetRoutines } = props;

  const handleDelete = async () => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/logs/${routine.id}`;
    await axios.delete(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    setDeleted(true);
    setTimeout(() => {
      setGetRoutines(!getRoutines);
      setDeleted(false);
    }, 2000);
  };

  return (
    <button onClick={handleDelete}>{deleted ? "Deleting!" : "Delete"}</button>
  );
};

export default DeleteRoutine;
