import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Header/navBar";
import "./App.css";
//import Score from "./components/score";
import GameCard from "./components/GameCard";
import cardInfo from "./cardInfo.json";

class App extends Component {
  // state with the cardInfo json array
  state = {
    cardInfo
  };

  handleIncrement = () => {
    // Use the setState method to update a component's state
    this.setState({ clicked: true });
  };

  //if (isClicked === false)
  increment = (isClicked, id) => {
    if (isClicked === false) {
      console.log(this.state.cardInfo);
      console.log(id);
      let newCardInfo = this.state.cardInfo;
      newCardInfo[id].clicked = true;
      this.setState({ cardInfo: [...newCardInfo] });
      console.log(this.state.cardInfo);
    } else {
      //end of game, reset score to zero, check to see if it's a "top score", cards shake
      console.log("you lose");
    }
  };

  // Map over this.state.friends and render a GameCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav />
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
