import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class GroupDetails extends Component {
  state = {
    group: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getGroup(this.props.match.params.id)
      .then(res => this.setState({ group: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div>
            <h1>
                Group Name: {this.state.group.name}
            </h1>
            <p>
                This is where I will have the user input group members
            </p>
            <Link to="/group">← Back</Link>
        </div>
    );
  }
}

export default GroupDetails;
