const router = require("express").Router();
const logIn = require("../models/user");

//POST REQUEST MATCHING USER INPUT DATA WITH DATABASE DATA
router.route("/api/Usercheck").post(async (req, res) => {
  const suppliedPassword = req.body.password; //sends password from front end
  const email = req.body.email; //sends email from front end

  const foundUser = await logIn.findOne({ email }); //finding user in db by matching email address and storing in variable
  console.log("I am the gfound user: ", foundUser);

  if (foundUser !== null) {
    const actualPassword = foundUser.password; //assigning users password to 'actual password'
    if (suppliedPassword === actualPassword) {
      return res.status(200).send(); //return 200 if supplied password matches actual password
    } else {
      return res.status(401).send(); //return 401 if above does not match
    }
  }
  return res.status(401).send();
});

//GET REQUEST
router.route("/api/User").get((req, res) => {
  logIn
    .find()
    .then(login => res.json(login))
    .catch(err => res.status(400).json("error: " + err));
});

//POST REQUEST
router.post("/api/addUser", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new logIn({
    email,
    password
  });

  newUser
    .save()
    .then(() => res.json("New user now added!"))
    .catch(err => res.status(400).json("error: " + err));
});

//GET REQUEST
router.route("/api/User/:id").get((req, res) => {
  logIn
    .findById(req.params.id)
    .then(logIn => res.json(login))
    .catch(err => res.status(400).json("error: " + err));
});

//DELETE REQUEST
router.route("/api/delete/User/:id").delete((req, res) => {
  logIn
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch(err => res.status(400).json("error: " + err));
});

//UPDATE REQUEST
router.route("/api/update/User/:id").post((req, res) => {
  logIn.findById(req.params.id).then(login => {
    login.email = req.body.email;
    login.password = req.body.password;

    login
      .save()
      .then(() => res.json("User updated!."))
      .catch(err => escape.status(400).json("error: " + err));
  });
});

module.exports = router;