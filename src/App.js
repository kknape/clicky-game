import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Header/navBar";
import "./App.css";
import GameCard from "./components/GameCard";
import cardInfo from "./cardInfo.json";

class App extends Component {
  // state with the cardInfo json array, score, top score
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

  //game over: reset score to zero, check to see if it's a "top score", cards shake, cards shuffle
  gameReset = () => {
    // reset all card "clicked" properties to false
    let newCardReset = this.state.cardInfo.map(card => {
      card.clicked = false;
      return card;
    });

    this.setState(
      {
        cardInfo: [...newCardReset],
        score: 0,
        topScore: this.state.topScore,
        userMsg: "You guessed incorrectly.",
        shake: true
      },
      () => {
        console.log("reset", this.state);
        // see latest state changes in console
      }
    );

    //shuffle the cards
    newCardReset.sort(function(a, b) {
      return 0.5 - Math.random();
    });
  };

  //if a given card has a 'clicked' state of false, then change it's state to true
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
          userMsg: "You guessed correctly.",
          score: newScore,
          shake: false
        },
        () => {
          console.log("guessed correctly", this.state);
          // see latest state changes in console
        }
      );

      //add one point to the score
      if (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
      }
    } else {
      //game over: reset score to zero, check to see if it's a "top score", cards shake, cards shuffle
      this.gameReset();
    }
  };

  //Show score
  // Map over this.state.friends and render a GameCard component for each friend object
  //run Game Card component, captures click of a given card, sets state to True.
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
