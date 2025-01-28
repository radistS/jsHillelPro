import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
  };

  return (
      <div >
        <h1 >TODO List</h1>
        <div>
          <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter new task..."
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul >
          {todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <div>
                  <button onClick={() => handleToggleComplete(todo.id)}>{todo.completed ? "Undo" : "Complete"}</button>
                  <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default App;
