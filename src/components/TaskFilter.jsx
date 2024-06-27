import React from 'react';
import '../App.css';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="task-filter">
      <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
      <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      <button onClick={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active' : ''}>Incomplete</button>
    </div>
  );
};

export default TaskFilter;
