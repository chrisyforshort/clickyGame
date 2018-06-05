import React , { Component, Fragment } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Score from "./components/Score";
import cards from "./cards.json";
import FortniteCards from "./components/FortniteCards";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on the skins. But beware, if you click on the same skin twice then you take the L.";

class App extends Component {
  state = {
    cards,
    correctGuesses,
    bestScore,
    clickMessage
  };

  setClicked = id => {
    const cards = this.state.cards;

    const clickedMatch = cards.filter(cards => cards.id == id);

      if (clickedMatch[0].clicked) {
        console.log("Correct Guesses:" + correctGuesses);
        console.log("Best Score:" + bestScore)

        correctGuesses = 0;
        clickMessage = "Woops, you already clicked on that. Time to start a new game."
        
        for(let i = 0; i < cards.length; i++) {
          cards[i].clicked = false;
        }

        this.setState({ clickMessage });
        this.setState({ correctGuesses })
        this.setState({ cards })
      } else if (correctGuesses <11) {
          clickedMatch[0].clicked = true;
          correctGuesses++;
          clickMessage = "You got it!";

          if(correctGuesses > bestScore) {
            bestScore = correctGuesses;
            this.setState({ bestScore });
          }

          cards.sort(function(a,b){return 0.5 - Math.random()});

          this.setState({ cards });
          this.setState({ correctGuesses });
          this.setState({clickMessage})
      } else {
        clickedMatch[0].clicked = true;

        correctGuesses = 0;

        clickMessage = "You won!"
        bestScore = 12;
        this.sestState({ bestScore });

        for(let i= 0; i < cards.length ; i++) {
          cards[i].clicked = false;
        }
        cards.sort(function(a,b){return 0.5 - Math.random()});
        this.setState({ cards });
        this.setState({ correctGuesses });
        this.setState({clickMessage});
      }
  };

  render() {
    return (
    <Fragment>
    <Title>Fortnite Clicky Game    <h3>{this.state.clickMessage}</h3>
    <h3>Correct Guesses: {this.state.correctGuesses}
    <br />
    Best Score: {this.state.bestScore}
    </h3></Title>
    <Wrapper>
  
      {this.state.cards.map(card => (
      <FortniteCards
        setClicked = {this.setClicked}
        id = {card.id}
        key = {card.id}
        image = {card.image}
        />
      ))}
    </Wrapper>
    </Fragment>
    )};

};


  
export default App;
