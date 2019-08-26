import React, { Component } from "react";
//import Score from "./components/score";
//import TopScore from "./components/topScore";
import "./navBar.css";

class Nav extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar myNavBar">
          <nav-item
            style={
              this.styles && {
                fontSize: 28,
                color: "white",
                fontWeight: "bold"
              }
            }
            className="navbar-brand"
          >
            Get Clicky With It!
          </nav-item>
          <nav-item>Click an image to start the game!</nav-item>
          <nav-item>Score: </nav-item>
          <nav-item>Top Score: </nav-item>
        </nav>
      </div>
    );
  }
}

export default Nav;
