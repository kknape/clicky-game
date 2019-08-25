import React, { Component } from "react";
//import Score from "./components/score";
//import TopScore from "./components/topScore";

class Nav extends Component {
  styles = {
    backgroundColor: "#563d7c",
    color: "white",
    fontSize: 22
  };

  render() {
    return (
      <div class="container">
        <nav style={this.styles} className="navbar">
          <a
            style={
              this.styles && {
                fontSize: 28,
                color: "white",
                fontWeight: "bold"
              }
            }
            className="navbar-brand"
            href="#"
          >
            Get Clicky With It!
          </a>
          <nav-item>Click an image to start the game!</nav-item>
          <nav-item>Score: </nav-item>
          <nav-item>Top Score: </nav-item>
        </nav>
      </div>
    );
  }
}

export default Nav;
