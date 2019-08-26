import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Header/navBar";
import "./App.css";
//import Score from "./components/score";
import FriendCard from "./components/FriendCard";
import cardInfo from "./cardInfo.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cardInfo
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav />
        {this.state.cardInfo.map(cardInfo => (
          <FriendCard
            id={cardInfo.id}
            key={cardInfo.id}
            image={cardInfo.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
