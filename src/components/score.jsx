import React, { Component } from "react";

class Score extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        Score: <span>{this.state.count}</span>
      </div>
    );
  }
}

export default Score;
