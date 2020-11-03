import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import HomePage from "./pages/HomePage/homepage";
import Accounts from "./pages/accounts";
import "./pages/HomePage/style.css";
import Signup from "./pages/signup";
import Login from "./pages/signin";
import Members from "./pages/members";
import Parks from "./pages/parks";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage user={user}/>
          </Route>
          <Route path="/accounts">
          <Accounts user={user}/>
          </Route>
          <Route path="/Signup">
          <Signup user={user} setUser={setUser}/>
          </Route>
          <Route path="/Login">
          <Login user={user} setUser={setUser}/>
          </Route>
          <Route path="/members">
          <Members user={user}/>
          </Route>
          <Route path="/parks">
          <Parks user={user}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
