import React, { Component } from "react";
import FriendCard from "./components/FriendCard";

class Score extends Component {
  state = {
    count: 0
  };
  
  this.setState(prevState => {
    return { count: prevState.count + 1 };
  });
  

export default Score;

