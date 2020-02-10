import React from "react";
import { Component } from "react";
import API from "../utils/API";
// import "./style.css";
// import { List, ListItem} from "../components/List/List";
import { Card } from "../components/Card/Card";

class Group extends Component {
  state = {
    groups: []
  };

  componentDidMount() {
    this.loadGroups();
  }

  loadGroups = () => {
    API.getGroups()
      .then(res => this.setState({ groups: res.data}))
      .catch(err => console.log(err));
  };

  deleteGroup = id => {
    API.deleteGroup(id)
      .then(res => this.loadGroups())
      // if I have `then` it won't delete it
      .catch(err => console.log("error is: " + err));
      console.log("did I hit delete group? ID =" + id);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("you hit submit");
    if (this.state.name) {
      API.saveGroup({
        name: this.state.name,
      })
        .then(res => this.loadGroups())
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
        <div className="w-full max-w-lg container">
          <h1>Welcome! Here you can enter your Book Club Groups</h1>
          <div className="">
            <form className="m-4 flex">
              <input className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" id="inline-username" type="text" placeholder="group name"
              value={this.state.name} name="name" onChange={this.handleInputChange}/>
                <button className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" 
                  disabled={!(this.state.name)} onClick={this.handleFormSubmit}>
                  Submit
                </button>
            </form>
          </div>
          <div>
            {this.state.groups.length ? (
              <>
                {this.state.groups.map(group => (
                  <Card key={group._id}>
                    <a href={"/groups/" + group._id} className="font-bold text-xl ">
                      {group.name}
                    </a>
                    <div className="flex items-center justify-center">
                      <div className="m-3">
                        <button className="bg-white text-gray-800 rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center font-bold"
                        onClick={() => this.deleteGroup(group._id)}>
                          <span className="mr-2">Delete</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                          </svg>
                          </button>
                        </div>
                      </div>
                  </Card>
                ))}
              </>
            ) : (<h3>There are no results!!!!</h3>)}
          </div>



          {/* <div className="groups-go-here rounded-lg border-blue-500 inline-block">
          {this.state.groups.length ? (
                <List>
                  {this.state.groups.map(group => (
                    <ListItem key={group._id}>
                      <a href={"/groups/" + group._id}>
                        <strong>
                          Group ID: {group._id}
                          <br/>
                          Group Name: {group.name}
                        </strong>
                      </a>
                      <div className="flex items-center justify-left">
                      <div className="m-3">
                        <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                        onClick={() => this.deleteGroup(group._id)}>
                          <span className="mr-2">Delete</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                          </svg>
                          </button>
                        </div>
                      </div>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}

          </div> */}
      </div>
    );
  }
}

export default Group;