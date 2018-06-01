import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
  //every component is required to have a render. REnder shows what's on screen
  render() {
    return <div>Hello World!</div>;
  }
}
// This is the section that takes the change, and only changes those things in 'root'
ReactDOM.render(<HelloWorld />, document.getElementById("root"));
