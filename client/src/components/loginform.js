import React, { Component } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

export default class loginform extends Component {
  constructor(props) {
    console.log(props);
    super(props);

    this.emailAddressInput = this.emailAddressInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    email: "",
    password: "",
    loginError: false
  };

  emailAddressInput(e) {
    this.setState({ email: e.target.value });
  }

  passwordInput(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const retrievedAccount = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("api/Usercheck", retrievedAccount)
      .then(res => {
        this.props.setUser(res.data);
        //window.location = `/?email=${this.state.email}`;

      })
      .catch(err => {
        this.setState({ loginError: true });
      });
  }

  render() { 
    if (this.props.user){
      return <Redirect to={`/?email=${this.state.email}`}/>
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control email-input-form"
              onChange={this.emailAddressInput}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email address"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control password-input-form"
              onChange={this.passwordInput}
              id="exampleInputPassword1"
              placeholder="password"
              value={this.state.password}
            />
          </div>
          <button
            name="signin"
            type="submit"
            value="Sign In"
            className="btn btn-primary create-account-button"
          >
            Log In
          </button>
        </form>
      </div>
    );
  }
}
