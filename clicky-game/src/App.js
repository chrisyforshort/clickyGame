import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div>
    <Score />
    <Title>Clicky Game</Title>
    {cards.map(card => (
    <FortniteCards
      image={card.image}
      />
    ))}
  </div>
);

export default App;
