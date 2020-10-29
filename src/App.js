import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import HomePage from "./pages/HomePage/homepage";
import Accounts from "./pages/accounts";
import "./pages/HomePage/style.css";
import Signup from "./pages/signup";
import Login from "./pages/signin";
import members from "./pages/members";
import parks from "./pages/parks";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/accounts" component={Accounts} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/members" component={members} />
          <Route path="/parks" component={parks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
