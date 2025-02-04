import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, clearData } from './store/swapiActions.js';

const App = () => {
  const [id, setId] = useState('1');
  const dispatch = useDispatch();
  const { data, loading, error, url } = useSelector((state) => {
    console.log('Redux state:', state);
    return state.api;
  });

  const handleFetch = () => {
    const apiUrl = `https://swapi.dev/api/people/${id}`;
    dispatch(fetchData(apiUrl));
  };

  const handleClear = () => {
    dispatch(clearData());
  };

  return (
      <div className="flex flex-col items-center p-4 font-sans">
        <h1 className="text-2xl font-bold mb-4">SWAPI</h1>

        <div className="flex w-full max-w-xl mb-4">
          <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter ID"
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
              onClick={handleFetch}
              className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get Info
          </button>
        </div>

        <div className="w-full max-w-xl bg-gray-100 p-4 rounded shadow">
          <p className="text-sm text-gray-500 mb-2">URL: {url || 'N/A'}</p>
          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {data && (
              <pre className="text-sm overflow-auto max-h-96 bg-white p-2 border border-gray-300 rounded">
            {JSON.stringify(data, null, 2)}
          </pre>
          )}
        </div>

        <button
            onClick={handleClear}
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Clear
        </button>
      </div>
  );
};

export default App;
