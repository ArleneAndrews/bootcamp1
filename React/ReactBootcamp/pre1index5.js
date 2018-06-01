import React from "react";
import ReactDOM from "react-dom";

//parent
class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tyler McGinnis",
      friends: ["Jake Lingwall", "Sarah Drasner", "Merrick Christensen"]
    };
  }
  render() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    );
  }
}
//child
class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>{this.props.names.map(friend => <li>{friend}</li>)}</ul>
      </div>
    );
  }
}
