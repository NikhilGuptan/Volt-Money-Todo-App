import React from 'react';
import TaskItem from './TaskItem';
import '../App.css';

const TaskList = ({ tasks, removeTask, editTask, toggleCompletion,sortOption }) => {

  if(!tasks.length){
    return <h1>No Task {sortOption!=="none" ? `With Priority ${sortOption}.`:"Available"}</h1>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          editTask={editTask}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
