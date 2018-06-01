//Making a parent to share state between components
import React from "react";
import ReactDOM from "react-dom";

class HelloUser extends React.Component {
  constructor(props) {
    super(props);
    //set any data/state that you want to share here
    this.state = {
      username: "tylermcginnis"
    };
  }
  render() {
    return <div>Hello {this.state.username}</div>;
  }
}
