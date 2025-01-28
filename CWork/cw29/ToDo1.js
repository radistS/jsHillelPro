import React, { useState } from "react";

const TodoApp = () => {
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
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">TODO List</h1>
        <div className="flex mb-4">
          <input
              type="text"
              className="flex-1 p-2 border rounded"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter new task..."
          />
          <button
              className="ml-2 p-2 bg-blue-500 text-white rounded"
              onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
              <li
                  key={todo.id}
                  className={`p-2 border rounded flex justify-between items-center ${
                      todo.completed ? "bg-green-100 line-through" : ""
                  }`}
              >
                <span>{todo.text}</span>
                <div>
                  <button
                      className="p-1 mr-2 text-sm bg-yellow-400 text-white rounded"
                      onClick={() => handleToggleComplete(todo.id)}
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                      className="p-1 text-sm bg-red-500 text-white rounded"
                      onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default TodoApp;
