import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Лічильник: {count}</h1>
        <button
            onClick={() => dispatch(increment())}
            style={{ fontSize: '20px', marginRight: '10px' }}
        >
          +
        </button>
        <button
            onClick={() => dispatch(decrement())}
            style={{ fontSize: '20px' }}
        >
          -
        </button>
      </div>
  );
}

export default App;
