import React from 'react';

const Result = ({ winner, maxVotes, clearResults }) => {
  if (!winner) return null;

  return (
      <div className="results">
        <p>Winner: {winner} with {maxVotes} votes!</p>
        <button className="button" onClick={clearResults}>Clear Results</button>
      </div>
  );
}

export default Result;
