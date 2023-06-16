const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0/authDB");
const userSchema = {
  username: String,
  password: String,
};

const User = new mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);
  const userObject = { username, password: hashedPwd };
  const user = await User.create(userObject);
  if (user) {
    res.status(201).json(`New user ${username} created`);
  } else {
    res.status(400).json("Invalid user data received");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  const foundUser = await User.findOne({ username }).exec();
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) return res.status(401).json("Unauthorized");

  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: foundUser.username,
      },
    },
    "secret",
    { expiresIn: "15m" }
  );
  res.json({ accessToken });
});

app.listen(5000, () => console.log("Server running on port 5000"));
