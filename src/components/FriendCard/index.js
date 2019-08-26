import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div
        /*onClick={() => props.clicked(props.id)} */ className="img-container"
      >
        <img className="img-thumbnail" alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
