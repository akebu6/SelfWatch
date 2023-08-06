import { useState } from 'react';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

const App = () => {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, { name: newActivity, completed: false }]);
  };

  const handleToggleComplete = (index) => {
    setActivities((prevActivities) => {
      const updatedActivities = [...prevActivities];
      updatedActivities[index].completed = !updatedActivities[index].completed;
      return updatedActivities;
    });
  };

  return (
    <div>
      <h1>Self Care Tracker</h1>
      <ActivityForm onAddActivity={handleAddActivity} />
      <ActivityList activities={activities} onToggleComplete={handleToggleComplete} />
    </div>
  );
};

export default App;
