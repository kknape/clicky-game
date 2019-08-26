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
          <Card />
        ))}
      </div>
    );
  }
}

export default Card;
