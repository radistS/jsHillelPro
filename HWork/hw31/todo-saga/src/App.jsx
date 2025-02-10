// src/App.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadTodosRequest,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  clearTodos,
} from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  const { todos, error } = useSelector(state => state.todos);

  // Загружаем задачи при монтировании компонента
  useEffect(() => {
    dispatch(loadTodosRequest());
  }, [dispatch]);

  const handleAdd = () => {
    const newTodo = {
      id: Date.now(),
      text: 'Новая задача',
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
      <div style={{ padding: '20px' }}>
        <h1>TODO List</h1>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <ul>
          {todos.map(todo => (
              <li key={todo.id} style={{ marginBottom: '8px' }}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginRight: '10px' }}>
              {todo.text}
            </span>
                <button onClick={() => dispatch(toggleTodo(todo.id))}>
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))} style={{ marginLeft: '5px' }}>
                  Delete
                </button>
              </li>
          ))}
        </ul>
        <button onClick={handleAdd}>Add Todo</button>
        <button onClick={() => dispatch(clearTodos())} style={{ marginLeft: '5px' }}>
          Clear Todos
        </button>
      </div>
  );
};

export default App;
