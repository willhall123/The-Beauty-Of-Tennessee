import React from "react";
import SignupForm from "../components/LoginForm";
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
