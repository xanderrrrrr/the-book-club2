import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
// import { List, ListItem} from "../components/List/List";
import moment from "moment";
import { Card } from "../components/Card/Card";

class MemberDetails extends Component {
  state = {
    members: [],
    book: {}
  };

  // When this component mounts, grab the member with the _id of this.props.match.params.id
  // e.g. localhost:3000/members/5234
  componentDidMount() {
    // console.log("res data: " + this.props.match.params.id)
    API.getSpecificMember(this.props.match.params.id)
      .then(res => this.setState({ members: res.data }))
      .catch(err => console.log("error is" + err));
      this.loadBooks();

      var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function(event){
    event.preventDefault()
    toggleModal()
  })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
  evt = evt || window.event
  var isEscape = false
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc")
  } else {
    isEscape = (evt.keyCode === 27)
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal()
  }
};


function toggleModal () {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
}

      
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
        <div className="w-full max-w-lg">
          <h1>Here you can enter your books!</h1>
        <h1>
            Member Name: 
            <strong>{this.state.members.name}</strong>
        </h1>

        <button className="modal-open bg-transparent border border-gray-500 hover:border-blue-700 text-gray-500 hover:text-blue-700 font-bold py-2 px-4 rounded-lg">Click to add book</button>
  
  {/* <!--Modal--> */}
  <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
    
    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      
      <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
        <span className="text-sm">(Esc)</span>
      </div>

      {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
      <div className="modal-content py-4 text-left px-6">
        {/* <!--Title--> */}
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold">Enter your book here</p>
          <div className="modal-close cursor-pointer z-50">
            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>

        {/* <!--Body--> */}
        <div className="">
          <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey-darker font-bold mb-2" for="grid-title">
                Book Title
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-title" type="text" placeholder="Ulysses" 
              value={this.state.name} name="name" onChange={this.handleInputChange}/>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block tracking-wide text-grey-darker font-bold mb-2" for="grid-author">
                Book Author
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-author" type="text" placeholder="James Joyce"
              value={this.state.author} name="author" onChange={this.handleInputChange}/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-8">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey-darker font-bold mb-2" for="grid-minutes-left">
                Minutes*
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-minutes-left" type="number" placeholder="540"
              value={this.state.audioDuration} name="audioDuration" onChange={this.handleInputChange}/>
              <div className="absolute">
              <p className="text-grey-dark text-xs italic">*Enter either Minutes or Pages</p>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block tracking-wide text-grey-darker font-bold mb-2" for="grid-pages-left">
                Pages*
              </label>
                <input className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-pages-left" type="number" placeholder="300"
                value={this.state.textDuration} name="textDuration" onChange={this.handleInputChange}/>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block tracking-wide text-grey-darker font-bold mb-2" for="grid-next-meetup">
                Meetup
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-next-meetup" type="date" placeholder="90210"
              value={this.state.meetUpDate} name="meetUpDate" onChange={this.handleInputChange}/>
            </div>
          </div>
          {/* <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 text-center">
            <button className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit"
              disabled={!(this.state.name)} onClick={this.handleFormSubmit}>Submit</button>
            </div>
          </div> */}
        </div>

        {/* <!--Footer--> */}
        <div className="flex justify-end pt-2">
          <button className="modal-close px-4 bg-transparent p-3 rounded-lg text-blue-700 hover:bg-gray-100 hover:text-indigo-400 mr-2" type="submit"
              disabled={!(this.state.name)} onClick={this.handleFormSubmit}>Submit</button>
          <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close</button>
        </div>
        
      </div>
    </div>
  </div>
        


        {/* <div className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4 flex flex-col my-2">
          <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey-darker font-bold mb-2" for="grid-title">
                Book Title
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-title" type="text" placeholder="Ulysses" 
              value={this.state.name} name="name" onChange={this.handleInputChange}/>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block tracking-wide text-grey-darker font-bold mb-2" for="grid-author">
                Book Author
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-author" type="text" placeholder="James Joyce"
              value={this.state.author} name="author" onChange={this.handleInputChange}/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-8">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey-darker font-bold mb-2" for="grid-minutes-left">
                Min Left
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-minutes-left" type="number" placeholder="540"
              value={this.state.audioDuration} name="audioDuration" onChange={this.handleInputChange}/>
              <div className="absolute">
              <p className="text-grey-dark text-xs italic">Only one of min left/pages left is required</p>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block tracking-wide text-grey-darker font-bold mb-2" for="grid-pages-left">
                Pages Left
              </label>
                <input className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-pages-left" type="number" placeholder="300"
                value={this.state.textDuration} name="textDuration" onChange={this.handleInputChange}/>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block tracking-wide text-grey-darker font-bold mb-2" for="grid-next-meetup">
                Meetup
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-next-meetup" type="date" placeholder="90210"
              value={this.state.meetUpDate} name="meetUpDate" onChange={this.handleInputChange}/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 text-center">
            <button className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit"
              disabled={!(this.state.name)} onClick={this.handleFormSubmit}>Submit</button>
            </div>
          </div>
        </div> */}



          <div className="">
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


            <Link to={"/groups/" + this.state.members._groupId}>
            <div className="flex items-center justify-left mb-12">
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
  
  export default MemberDetails;
  