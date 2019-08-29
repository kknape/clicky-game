import React from "react";
import "./navBar.css";

function Nav(props) {
  return (
    <div className="container">
      <nav className="navbar myNavBar">
        <ul className="nav">
          <li className="nav-item navbar-brand myTitle">
            <a href="/">Get Clicky With It!</a>
          </li>
          <li className="nav-item">Click an image to start the game!</li>
          <li className="nav-item score">
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
