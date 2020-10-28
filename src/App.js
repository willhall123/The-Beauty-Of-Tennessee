import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import HomePage from "./pages/HomePage/Homepage";
import Accounts from "./pages/Accounts";
import "./pages/HomePage/style.css";
import Signup from "./pages/Signup";
import Login from "./pages/Signin";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Accounts" component={Accounts} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
