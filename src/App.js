import React, { Component } from 'react';
import './App.css';
import Card from './Cards/Cards';


const ranks = [
    '2', '3','4', '5','6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
];
const suits = [
  'H', 'C', 'D', 'S'
];
class App extends Component {
  state = {
    dist: []
  };
  shuffleCards = () => {
      let someCard = this.generateCards();
      let face = [];
      for (let d = 0; d < 5; d++) {
         let randomCard = Math.floor(Math.random() * someCard.length)
      }
  };
  generateCards = () => {
    const cardDeck = [];
    for (let i = 0; i < suits.length; i++){
        for (let j = 0; j < ranks.length; j++) {
            let carta = {suits: suits[i], ranks: ranks[j]};
            cardDeck.push(carta)
        }
    }
    return cardDeck;
  };
  render() {
    this.generateCards();
    return (
      <div className="App playingCards faceImages">
        <ul className="table">
          <li><Card suit="H" rank="10"/></li>
          <li><Card suit="D" rank="J"/></li>
          <li><Card suit="C" rank="A"/></li>
          <li><Card suit="S" rank="2"/></li>
          <li><Card suit="S" rank="3"/></li>
        </ul>
      </div>
    );
  }
}

export default App;
