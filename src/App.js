import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Header/navBar";
import "./App.css";
//import Score from "./components/score";
import GameCard from "./components/GameCard";
import cardInfo from "./cardInfo.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cardInfo,
    clicked: props.clicked
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ clicked: true });
  };

  //if (isClicked === false)
  increment = isClicked => {
    if (props.clicked === false) {
      setCount(count + 1);
      setClick(true);
      this.setState({ clicked: true });
      console.log(props);
    } else {
      //end of game, reset score to zero, check to see if it's a "top score", cards shake
    }
  };

  // Map over this.state.friends and render a GameCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav />
        {this.state.cardInfo.map(cardInfo => (
          <GameCard
            id={cardInfo.id}
            key={cardInfo.id}
            image={cardInfo.image}
            clicked={increment}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
