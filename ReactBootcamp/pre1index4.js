//confused on this: why is the props in the render? Answer: because this is a child componet, and the new information is passed this way - see Pre1index5.js
import React from "react";
import ReactDOM from "react-dom";

class HelloUser extends React.Component {
  render() {
    return <div> Hello, {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloUser name="Tyler" />, document.getElementById("root"));
