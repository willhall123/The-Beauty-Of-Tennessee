import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    
};

function Welcome() {
    return (
       <div classname="main-container">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Welcome to The Beauty Of Tennessee!</h1>
                <p class="lead">Please Log In or Sign Up to find a park near you!</p>
            </div>
          </div>
         {/* Options to log in or sign up here */}
        </div> 
    );
}

export default Welcome;