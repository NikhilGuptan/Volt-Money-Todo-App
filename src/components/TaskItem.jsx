import React, { useState } from "react";
import "../App.css";

const TaskItem = ({ task, removeTask, editTask, toggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => toggleCompletion(task.id)}>
            Toggle Complete
          </button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => removeTask(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
