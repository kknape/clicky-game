import React, { Component } from "react";
import "./navBar.css";

class Nav extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar myNavBar">
          <ul className="nav">
            <li className="nav-item navbar-brand myTitle">
              <a href="/">Get Clicky With It!</a>
            </li>
            <li className="nav-item">Click an image to start the game!</li>
            <li className="nav-item score">Score: 0 | Top Score: 0 </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
