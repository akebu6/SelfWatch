import React, { useState } from 'react';

const ActivityForm = ({ onAddActivity }) => {
  const [activity, setActivity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddActivity(activity);
    setActivity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter an activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default ActivityForm;
