import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Score from "./components/Score";
import cards from "./cards.json";
import FortniteCards from "./components/FortniteCards";

const App = () => (
  <Wrapper>
    {/* <Score /> */}
    <Title>Clicky Game</Title>
    {cards.map(card => (
    <FortniteCards
      image={card.image}
      />
    ))}
  </Wrapper>
);

export default App;
