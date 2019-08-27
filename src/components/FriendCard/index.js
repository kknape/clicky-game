import React, { useState } from "react";
import "./style.css";

function FriendCard(props) {
  //set state of card to false by default - "card has not been clicked"
  let [isClicked, setClick] = useState(false);

  //each card who's state changes to true, adds 1 to current score
  const [count, setCount] = useState(0);

  //a function to increment the count/score and set isClicked

  //if (isClicked === false)
  const increment = () => {
    setCount(count + 1);
    setClick(true);
  };

  return (
    <div className="card">
      <h1>
        {count}
        {isClicked}
      </h1>
      <div onClick={increment} className="img-container">
        <img className="img-thumbnail" alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
