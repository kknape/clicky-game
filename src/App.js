//Main game logic

import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Header/navBar";
import GameCard from "./components/GameCard";
import cardInfo from "./cardInfo.json";

class App extends Component {
  // state with the cardInfo json array, score, top score, user message and 'shake' state
  state = {
    cardInfo,
    score: 0,
    topScore: 0,
    userMsg: "Click an image to start the game!",
    shake: false
  };

  handleIncrement = () => {
    // Use the setState method to update a component's state
    this.setState({ clicked: true });
  };

  //if you guess all cards correctly, give user a Win message and reset the game
  gameWin = () => {
    let newCardReset = this.state.cardInfo.map(card => {
      card.clicked = false;
      return card;
    });
    this.setState({
      cardInfo: [...newCardReset],
      score: 0,
      topScore: 0,
      userMsg: "You won! Click to play again.",
      shake: false
    });
  };

  //if you guess incorrectly, the game is over
  //reset clicked value to false
  //reset shake value to false
  //reset score to zero
  //check to see if it's a "top score", if yes, update Top Score with the new score
  //apply shake effect
  //shuffle cards
  gameReset = () => {
    // reset all card "clicked" properties to false
    let newCardReset = this.state.cardInfo.map(card => {
      card.clicked = false;
      return card;
    });

    // resort entire array of cards
    newCardReset.sort(function(a, b) {
      return 0.5 - Math.random();
    });

    this.setState(
      {
        cardInfo: [...newCardReset],
        score: 0,
        topScore: this.state.topScore,
        userMsg: "Incorrect Guess. Game Over.",
        shake: true
      },
      () => {
        // see latest state changes in console
        console.log("reset", this.state);
      }
    );
  };

  //if you guess correctly (picking a card that has not yet been picked)
  //change clicked state to true
  //shuffle the cards
  //add one point to the score
  //show user message, "That's correct!"
  //shake set to false

  increment = (isClicked, id) => {
    console.log("entering increment function ", isClicked, id);
    if (isClicked === false) {
      // update element in card array with "clicked property as true"
      let newCardInfo = this.state.cardInfo;
      newCardInfo[id].clicked = true;

      // resort entire array of cards
      newCardInfo.sort(function(a, b) {
        return 0.5 - Math.random();
      });

      //add one point to the score
      let newScore = this.state.score + 1;

      // update react state
      // 1) sorted newCardInfo with item clicked as true
      // 2) show user message, "That's correct!"
      // 3) score with addition of 1 point
      // 4) shake set to false

      this.setState(
        {
          cardInfo: [...newCardInfo],
          userMsg: "Correct guess!",
          score: newScore,
          shake: false
        },
        () => {
          // see latest state changes in console
          console.log("guessed correctly", this.state);
        }
      );

      //if all cards guessed correctly, run gameWin function
      if (newScore === cardInfo.length) {
        this.gameWin();
      }

      //if user guesses correctly add one point to the score
      else if (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
      }
    }
    //if user guesses incorrectly, run gameReset function
    else {
      this.gameReset();
    }
  };

  //Render will...
  //Run Wrapper component
  //Run Nav component
  //dynamically shows the User Message, Score and Top Score based on game play
  // Map over this.state.friends and render the GameCard component for each friend object
  //Running the Game Card component...
  //Shows the card
  //Captures the click of a given card
  //Sets state to True
  //Applies shake class if shake state equals true.
  render() {
    return (
      <Wrapper>
        <Nav
          userMsg={this.state.userMsg}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {this.state.cardInfo.map((cardInfo, index) => (
          <GameCard
            clicked={this.increment}
            id={index}
            key={index}
            image={cardInfo.image}
            isClicked={cardInfo.clicked}
            shake={this.state.shake}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
