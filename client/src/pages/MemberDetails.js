import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
// import { List, ListItem} from "../components/List/List";
import moment from "moment";
import { Card } from "../components/Card/Card";

class MemberDetails extends Component {
  state = {
    members: "",
    book: {}
  };

  // When this component mounts, grab the member with the _id of this.props.match.params.id
  // e.g. localhost:3000/members/5234
  componentDidMount() {
    // console.log("res data: " + this.props.match.params.id)
    API.getSpecificMember(this.props.match.params.id)
      .then(res => this.setState({ members: res.data.name }))
      .catch(err => console.log("error is" + err));
      this.loadBooks();
      
  }

  loadBooks = () => { 
    API.getBooksByMember(this.props.match.params.id)
    .then(res => this.setState({ book: res.data.filter(book => {

      var firstTimeConverted = moment(book.meetUpDate).add(1, "day");
      var diffTime = moment().diff(moment(firstTimeConverted), "days");
      return diffTime <= 0 

    })}))
    .then(res => this.howManyPages(this.state.book))
    .catch(err => console.log(err));
  }

  deleteBook = id => {
    API.deleteBook(id)
    .then(res => this.loadBooks())
    .catch(err => console.log("error is: " + err));
    console.log("did I hit delete book? bookID = " + id)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("you hit submit");
    if (this.state.name) {
      API.saveBook({
        _memberId: this.props.match.params.id,
        title: this.state.name,
        author: this.state.author,
        textDuration: this.state.textDuration,
        audioDuration: this.state.audioDuration,
        meetUpDate: this.state.meetUpDate
      })
        .then(res => this.loadBooks())
        .then(console.log("this is after saving book"))
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  howManyPages = (date, time, audioOrText) => {
    // console.log("books from state are " + JSON.stringify(booksFromState))

    // booksFromState.forEach(element => {
    //   // console.log("foreach loop + " + element._id)
    //   console.log("foraeach loop + " + element.meetUpDate)
    //   var firstTimeConverted = moment(element.meetUpDate).add(1, "day");
    //   var diffTime = moment().diff(moment(firstTimeConverted), "days");
    //   console.log("difftime: " + diffTime)

    //   var absVal = Math.abs(diffTime)

    //   var mathing = element.audioDuration / absVal;
    //   console.log('mathing' +  Math.ceil(mathing));

    // });

      var firstTimeConverted = moment(date).add(1, "day");
      var diffTime = moment().diff(moment(firstTimeConverted), "days");

      var absVal = Math.abs(diffTime)
      var mathing = time / absVal;

      switch (audioOrText) {
        case "audio":
          return <p>Days until meetup: {absVal}<br></br>Minutes per day: {Math.ceil(mathing)}</p>
        case "text":
          return <p>Days until meetup: {absVal}<br></br>Pages per day: {Math.ceil(mathing)}</p>
        default:
          return <p>Days until meetup: {absVal}<br></br>Default per day: {Math.ceil(mathing)}</p>
      }

  }
  
    render() {
      return (
        <div className="w-full max-w-lg container">
          <h1>Here you can enter your books!</h1>
        <h1>
            Member Name: 
            <strong>{this.state.members}</strong>
        </h1>
        <p>
            Enter your book. Only one of minutes left/pages left is required:
        </p>
        <div className="">
            <form className="m-4 flex">
              {/* book name */}
              <input className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="book title" type="text"
              value={this.state.name} name="name" onChange={this.handleInputChange}/>
              {/* book author */}
              <input className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="book author" type="text"
              value={this.state.author} name="author" onChange={this.handleInputChange}/>
              {/* book audioDuration */}
              <input className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="minutes left" type="text"
              value={this.state.audioDuration} name="audioDuration" onChange={this.handleInputChange}/>
              {/* book textDuration */}
              <input className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="pages left" type="text"
              value={this.state.textDuration} name="textDuration" onChange={this.handleInputChange}/>
              {/* book next meetup date */}
              <input className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="01/01/2020" type="date"
              value={this.state.meetUpDate} name="meetUpDate" onChange={this.handleInputChange}/>
              {/* submit button */}
              <button className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit"
              disabled={!(this.state.name)} onClick={this.handleFormSubmit}>Submit</button>
            </form>
        </div>

        <div id="books-go-here">
            {this.state.book.length ? (
              <>
                {this.state.book.map(book => (
                  <Card key={book._id}>
                    {/* <a href={"/books/" + book._id}> */}
                      <div className="font-bold-text-xl">
                        Title: <strong>{book.title}</strong>
                        {book.audioDuration ? this.howManyPages(book.meetUpDate, book.audioDuration, "audio") : this.howManyPages(book.meetUpDate, book.textDuration, "text")}
                      </div>
                    {/* </a> */}

                    <div className="flex items-center justify-center">
                    <div className="m-3">
                      <button className="bg-white text-gray-800 rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center font-bold"
                      onClick={() => this.deleteBook(book._id)}>
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
            ) : (
              <h3>No Results to Display</h3>
            )}


            </div>
            {/* <div className="w-1/2 items-center justify-right bg-gray-500 px-8">
                <p>Enter in book details here:</p>
            </div> */}


            <Link to="/group">
            <div className="flex items-center justify-left">
                <div className="m-3">
                    <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span className="mr-2">← Back to Groups</span>
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
  
  export default MemberDetails;
  