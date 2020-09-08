import React, { useState } from 'react';

const CreateLog = (props) => {
  const [comments, setComments] = useState('');
  

  return (
    <div className="create-log-container">
      <form>
        <label htmlFor="comments">Comments:</label>
        <input
          name="comments"
          type="text"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </form>
    </div>
  )
}

export default CreateLog;