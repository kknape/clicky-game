import React, { Component } from "react";
import cardInfo from "./cardInfo.json";

class Card extends Component {
  state = {
    cardInfo
  };
  render() {
    return (
      <div>
        {this.state.cardInfo.map(card => (
          <cardInfo />
        ))}
      </div>
    );
  }
}

export default Card;
