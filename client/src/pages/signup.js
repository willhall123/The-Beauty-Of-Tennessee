import React from "react";
import SignupForm from "../components/createaccount";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";

function Signup(props) {
  return (
    <div>
      <SignupForm {...props}/>
      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
}

export default Signup;
