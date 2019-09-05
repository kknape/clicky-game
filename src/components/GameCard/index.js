import React from "react";
import "./style.css";

function GameCard(props) {
  return (
    <div className="card">
      <div
        onClick={() => props.clicked(props.isClicked, props.id)}
        className={"img-container" + (props.shake ? "shake" : "")}
      >
        <div></div>
        <img className="img-thumbnail" alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default GameCard;
