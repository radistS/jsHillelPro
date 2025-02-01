import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store';

const App = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>TODO App</h1>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Введіть завдання"
              style={{ padding: '8px', width: '70%', marginRight: '10px' }}
          />
          <button type="submit" style={{ padding: '8px 16px' }}>
            Додати
          </button>
        </form>

        <ul style={{ marginTop: '20px' }}>
          {todos.map((todo, index) => (
              <li key={index} style={{ padding: '4px 0' }}>
                {todo}
              </li>
          ))}
        </ul>

        <footer style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          Загальна кількість завдань: {todos.length}
        </footer>
      </div>
  );
};

export default App;
