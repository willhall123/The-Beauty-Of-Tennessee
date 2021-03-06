const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(userRoutes);

//connect to mongoDB
const uri = "mongodb+srv://JonAustin:WomboCombo_64@cluster0.cmcdu.mongodb.net/final?retryWrites=true&w=majority";
console.log(uri);
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});