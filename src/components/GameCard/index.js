import React, { useState } from "react";
import "./style.css";

function GameCard(props) {
  //set state of card to false by default - "card has not been clicked"
  let [isClicked, setClick, id] = useState(false);

  //each card who's state changes to true, adds 1 to current score
  const [count, setCount] = useState(0);

  //a function to increment the count/score and set isClicked

  //if (isClicked === false)
  const increment = () => {
    //if (props.clicked === false) {
    console.log(props);
    setCount(count + 1);
    setClick(true);
    // }
    // else {
    //end of game, reset score to zero, check to see if it's a "top score", cards
    // }
  };

  return (
    <div className="card">
      <h1>
        {count}
        {isClicked}
      </h1>
      <div
        onClick={() => {
          props.clicked(isClicked, props.id);
        }}
        className="img-container"
      >
        <img className="img-thumbnail" alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default GameCard;
