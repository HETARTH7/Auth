const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0/authDB");
const userSchema = {
  username: String,
  password: String,
};

const User = new mongoose.model("User", userSchema);

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  newUser
    .save()
    .then()
    .catch((err) => res.status(400).json(`ERROR ${err}`));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username })
    .then((user) => {
      if (user.password === password) {
        const token = Jwt.sign(
          {
            userId: user._id,
            username: user.username,
          },
          "secret",
          { expiresIn: "24h" }
        );
        return res.send(token);
      }
    })
    .catch((err) => res.status(400).json(err));
});

app.listen(5000, () => console.log("Server running on port 5000"));
