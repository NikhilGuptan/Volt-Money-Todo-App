import React, { useState, useEffect } from 'react';

import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import '../App.css';

const TaskManagerApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState('all');
  const [sortOption, setSortOption] = useState('none');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const getSortedTasks = (tasks) => {
    console.log("taks---------->",tasks,sortOption);
    if(sortOption==="none"){
        return tasks;
    }
    if(sortOption==="low"){
        return tasks.filter((task)=>{
            return task.priority==="low";
        })
    }
    if(sortOption==="medium"){
        return tasks.filter((task)=>{
            return task.priority==="medium";
        })
    }
    if(sortOption==="high"){
        return tasks.filter((task)=>{
            return task.priority==="high";
        })
    }
  };

  const filteredTasks = getSortedTasks(
    tasks.filter((task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'incomplete') return !task.completed;
      return true;
    })
  );

  return (
    <div className="task-manager-app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <div className="task-sort-filter">
        <TaskFilter filter={filter} setFilter={setFilter} />
        <div className="sort-options">
          <label htmlFor="sort">Sort by priority: </label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="none">None</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <TaskList
        tasks={filteredTasks}
        removeTask={removeTask}
        editTask={editTask}
        toggleCompletion={toggleCompletion}
        sortOption={sortOption}
      />
    </div>
  );
};

export default TaskManagerApp;
