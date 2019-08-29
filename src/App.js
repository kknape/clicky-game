import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Header/navBar";
import "./App.css";
//import Score from "./components/score";
import GameCard from "./components/GameCard";
import cardInfo from "./cardInfo.json";

class App extends Component {
  // state with the cardInfo json array, score, top score
  state = {
    cardInfo,
    score: 0,
    topScore: 0,
    userMsg: "Click an image to start the game!"
  };

  handleIncrement = () => {
    // Use the setState method to update a component's state
    this.setState({ clicked: true });
  };

  gameReset = () => {
    for (var i = 0; i < cardInfo.length; i++) {
      let newCardReset = this.state.cardInfo;
      newCardReset[i].clicked = false;

      this.setState({
        cardInfo: [...newCardReset],
        score: 0,
        topScore: this.state.topScore,
        userMsg: "You guessed incorrectly."
      });
    }
  };

  //if a given card has a 'clicked' state of false, then change it's state to true
  increment = (isClicked, id) => {
    if (isClicked === false) {
      console.log(this.state.cardInfo);
      console.log(id);

      let newCardInfo = this.state.cardInfo;
      newCardInfo[id].clicked = true;
      this.setState({ cardInfo: [...newCardInfo] });
      console.log(this.state.cardInfo);

      //show user message, "That's correct!"
      let corUserMsg = this.state.userMsg;
      corUserMsg = "You guessed correctly.";
      this.setState({ userMsg: corUserMsg });
      console.log(this.state.userMsg);

      //add one point to the score
      let newScore = this.state.score + 1;
      this.setState({ score: newScore });
      console.log(this.state.score);

      //add to Top score if it's higher than the current score
      if (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
      }
    }
    //
    else {
      //game over
      this.gameReset();
      console.log("You lose.");
      console.log(this.state.cardInfo);
      //   //  this.setState({ rightWrong: "You win!" });
      //   //end of game, reset score to zero, check to see if it's a "top score", cards shake
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
        {this.state.cardInfo.map(cardInfo => (
          <GameCard
            clicked={this.increment}
            id={cardInfo.id}
            key={cardInfo.id}
            image={cardInfo.image}
            isClicked={cardInfo.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
