const ActivityList = ({ activities, onToggleComplete }) => {
  return (
    <div>
      <h2>Activities:</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={activity.completed}
                onChange={() => onToggleComplete(index)}
              />
              {activity.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
