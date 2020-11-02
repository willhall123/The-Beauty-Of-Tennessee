import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";

function accounts() {
  return (
    <div>
      <Link to="Login">
        <button
          name="singin"
          type="submit"
          value="Log In"
          className="btn btn-primary log-in-button"
        >
          Log In
        </button>
      </Link>
      <Link to="/Signup">
        <button
          name="signup"
          type="submit"
          value="Create Account"
          className="btn btn-primary create-account-button"
        >
          Sign Up
        </button>
      </Link>

      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
}

export default accounts;
