import React, { useState, useEffect } from 'react';
import Result from './Result';

const EmojiVoter = () => {
  const initialVotes = JSON.parse(localStorage.getItem('votes')) || {
    '😄': 0, '😊': 0, '😎': 0, '🤩': 0, '😍': 0
  };

  const [votes, setVotes] = useState(initialVotes);
  const [winner, setWinner] = useState(null);
  const [maxVotes, setMaxVotes] = useState(0);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  const vote = (emoji) => {
    const newVotes = { ...votes, [emoji]: votes[emoji] + 1 };
    setVotes(newVotes);
  };

  const showResults = () => {
    const max = Math.max(...Object.values(votes));
    const win = Object.keys(votes).find(emoji => votes[emoji] === max);
    setWinner(win);
    setMaxVotes(max);
  };

  const clearResults = () => {
    localStorage.removeItem('votes');
    setVotes({'😄': 0, '😊': 0, '😎': 0, '🤩': 0, '😍': 0});
    setWinner(null);
    setMaxVotes(0);
  };

  return (
      <div>
      <div className="emoji-voter">
        {Object.keys(votes).map(emoji => (
            <div key={emoji} className="emoji-container">
              <button className="emoji-button" onClick={() => vote(emoji)}>
                {emoji}
              </button>
              <span className="vote-count">{votes[emoji]}</span>
            </div>
        ))}
      </div>
      <div className="buttons">
        <button className="button" onClick={showResults}>Show result
        </button>
      </div>
      <div className="result">
        <Result winner={winner} maxVotes={maxVotes} clearResults={clearResults}/>
      </div>
      </div>
)
  ;
};

export default EmojiVoter;
