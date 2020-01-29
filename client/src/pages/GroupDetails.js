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
                Group Name: 
                <strong>{this.state.group.name}</strong>
            </h1>
            <p>
                This is where I will have the user input group members
            </p>

            <div className="flex flex-col">
            <label for="price" className="mt-4 mb-1 uppercase text-grey-darker font-bold">Number of members</label>
                <div className="flex flex-row">
                    <input type="number" name="price" class="bg-grey-lighter text-grey-darker py-2 font-normal rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold"/>
                </div>
            </div>
            <Link to="/group">
            <div className="flex items-center justify-left">
                <div className="m-3">
                    <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span className="mr-2">← Back</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        
                    </svg>
                    </button>
                </div>
            </div>
            </Link>
        </div>
    );
  }
}

export default GroupDetails;
