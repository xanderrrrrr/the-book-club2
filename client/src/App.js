import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Group from "./pages/Group";
import Homepage from "./pages/Homepage";
import GroupDetails from "./pages/GroupDetails";
// import Testing from "./components/Testing/Testing";
// I don't need to test the tailwind css properties right now

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MemberDetails from "./pages/MemberDetails";

function App() {

  const blackBG = {
    backgroundColor: '#000000'
  }
  return (
    <div className="App container">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <div>
        <header>
          <NavBar />
        </header>
        
        <Switch>
          <Route path="/" exact>
            <Homepage/>
          </Route>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/group" component={Group} />
          <PrivateRoute exact path="/groups/:id" component={GroupDetails} />
          <PrivateRoute exact path="/members/:id" component={MemberDetails} />
        </Switch>
        </div>
      </Router>
      <h1 className="text-white">Welcome to The Book Club</h1>
    </div>
  );
}

export default App;