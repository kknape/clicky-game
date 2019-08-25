import React, { Component } from "react";

class Card extends Component {
  state = {
    cards: [
      {
        id: 1,
        clicked: false,
        img: <img src="via.placeholder.com/150"></img>
      },
      {
        id: 2,
        clicked: false,
        img: <img src="via.placeholder.com/150"></img>
      },
      {
        id: 3,
        clicked: false,
        img: <img src="via.placeholder.com/150"></img>
      },
      {
        id: 4,
        clicked: false,
        img: <img src="via.placeholder.com/150"></img>
      }
    ]
  };

  render() {
    return <div>{this.state.cards.map(<Card key={cards.id} />)}</div>;
  }
}

export default Card;
