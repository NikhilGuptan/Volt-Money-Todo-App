import React, { useState } from 'react';
import '../App.css';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: '', description: '', completed: false, priority: 'medium' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now() });
    setTask({ title: '', description: '', completed: false, priority: 'medium' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Task Title*" required />
      <input type="text" name="description" value={task.description} onChange={handleChange} placeholder="Task Description (Optional)" />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
