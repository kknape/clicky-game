//Nav Bar component includes header style, game title, user message, score and top score

import React from "react";
import "./navBar.css";

function Nav(props) {
  return (
    <div className="container-fluid">
      <div className="row sticky-top">
        <div className="col-sm navbar myNavBar">
          <li className="nav-item navbar-brand myTitle">
            <a href="/">Get Clicky With It!</a>
          </li>
        </div>
        <div className="col-sm navbar myNavBar">
          <li className="nav-item userMsg">{props.userMsg}</li>
        </div>
        <div className="col-sm navbar myNavBar">
          <li className="nav-item score">
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
