import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FortniteCards from "./components/FortniteCards";

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
