const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logInForm = new Schema(
  {
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    coordinates: { type: Object, required: false },
    location: { type: String, required: false }
  },
  {
    timestamps: true
  }
);

const Userlogin = mongoose.model("Userlogin", logInForm);

module.exports = Userlogin;
