import React from 'react';
import TaskItem from './TaskItem';
import '../App.css';

const TaskList = ({ tasks, removeTask, editTask, toggleCompletion }) => {
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
