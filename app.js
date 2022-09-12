const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/authDB");

const userSchema = {
  username: String,
  password: String,
};
const User = new mongoose.model("User", userSchema);
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = new User({ username, password });
  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("new user added");
      res.render("secrets");
    }
  });
});
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username: username }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password == password) {
          res.render("secrets");
        }
      }
    }
  });
});
app.listen(5000, () => console.log("Server running on port 5000"));
