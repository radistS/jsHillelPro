import React, { useState, useEffect } from 'react';
import './ToDoList.css';

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    // Завантаження задач із localStorage
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    // Зберігання задач у localStorage при кожній зміні
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  const addTask = () => {
    if (!newTask.title || !newTask.description) {
      alert("Both title and description are required");
      return;
    }
    setTasks(prevTasks => [...prevTasks, { ...newTask, completed: false }]);
    setNewTask({ title: '', description: '' });
  };

  const markTaskAsDone = (index) => {
    const updatedTasks = tasks.map((task, idx) =>
        idx === index ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const remainingTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(remainingTasks);
  };

  return (
      <div>
        <h1>To-Do List</h1>
        <div>
          <input
              type="text"
              value={newTask.title}
              onChange={handleInputChange}
              name="title"
              placeholder="Task Title"
          />
          <input
              type="text"
              value={newTask.description}
              onChange={handleInputChange}
              name="description"
              placeholder="Task Description"
          />
          <button onClick={addTask} className="btn btn-primary">Add Task</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
              <li key={index} className="task-item">
            <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
                <div>
                  {!task.completed && (
                      <button onClick={() => markTaskAsDone(index)} className="btn btn-success">Done</button>
                  )}
                  <button onClick={() => deleteTask(index)} className="btn btn-danger">Delete</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default ToDoList;
