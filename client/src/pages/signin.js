import React from "react";
import SignupForm from "../components/loginform";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";

function signup() {
  return (
    <div>
      <SignupForm />
      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
}

export default signup;