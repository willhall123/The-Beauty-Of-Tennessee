import React, { Component } from "react";
import axios from "axios";

export default class loginform extends Component {
  constructor(props) {
    super(props);

    this.emailAddressInput = this.emailAddressInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    email: "",
    password: ""
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
      alert("New account created.");
      const createdAccount = {
        email: this.state.email,
        password: this.state.password
      };
      console.log(createdAccount);
      axios
        .post("/api/addUser", createdAccount)
        .then(res => console.log(res.data));
  }

  render() {
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
            name="signup"
            type="submit"
            value="Create Account"
            className="btn btn-primary create-account-button"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
