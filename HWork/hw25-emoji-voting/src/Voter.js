import './App.css';
import React, { Component } from 'react';
import Result from './Result';

class EmojiVoter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: JSON.parse(localStorage.getItem('votes')) || {
        '😄': 0,
        '😊': 0,
        '😎': 0,
        '🤩': 0,
        '😍': 0
      },
      winner: null,
      maxVotes: 0
    };
  }

  vote = (emoji) => {
    const newVotes = { ...this.state.votes, [emoji]: this.state.votes[emoji] + 1 };
    this.setState({ votes: newVotes });
    localStorage.setItem('votes', JSON.stringify(newVotes));
  }

  showResults = () => {
    const maxVotes = Math.max(...Object.values(this.state.votes));
    const winner = Object.keys(this.state.votes).find(emoji => this.state.votes[emoji] === maxVotes);
    this.setState({ winner, maxVotes });
  }

  clearResults = () => {
    localStorage.removeItem('votes');
    this.setState({ votes: {'😄': 0, '😊': 0, '😎': 0, '🤩': 0, '😍': 0}, winner: null, maxVotes: 0 });
  }

  render() {
    return (
        <div>
          <div className="emoji-voter">
          {Object.keys(this.state.votes).map(emoji => (
              <div key={emoji} className="emoji-container">
                <button className="emoji-button" onClick={() => this.vote(emoji)}>
                  {emoji}
                </button>
                <span className="vote-count">{this.state.votes[emoji]}</span>
              </div>
          ))}
          </div>
          <div className="buttons">
            <button className="button" onClick={this.showResults}>Show result</button>
          </div>
          <div className="result">
            <Result winner={this.state.winner} maxVotes={this.state.maxVotes} clearResults={this.clearResults} />
          </div>

        </div>
    );
  }
}

export default EmojiVoter;
