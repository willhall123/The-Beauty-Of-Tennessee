import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HomePage() {
  return (
    <div>
      
        <div className="container">
          <h1 className="display-4 title-header">The Beauty of Tennessee</h1>
          <p className="lead sub-title-header">Explore TN parks</p>
        </div>
      
      <Link to="accounts">
        <button type="button" className="btn btn-secondary btn-lg accounts-page-button">
          Sign Up / Log In
        </button>
      </Link>
      <Link to="parks">
        <button type="button" className="btn btn-secondary btn-lg find-park-button">
          Select Park
        </button>
      </Link>
      <Link to="members">
        <button type="button" className="btn btn-secondary btn-lg members-page-button">
          Members
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
