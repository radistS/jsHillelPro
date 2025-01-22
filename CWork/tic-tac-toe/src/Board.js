import React from 'react';
import Square from './Square';

function Board({ squares, onClick }) {
  const rows = 3;
  const cols = 3;

  return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 100px)` }}>
        {squares.map((value, i) => (
            <Square key={i} value={value} onClick={() => onClick(i)} />
        ))}
      </div>
  );
}

export default Board;
