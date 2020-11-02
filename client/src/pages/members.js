import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";

function members() {
  return (
    <div>
      <Link to="/">
        <HomeButton />
      </Link>
    </div>
  );
}

export default members;
