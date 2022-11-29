const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/authDB");
const userSchema = {
  username: String,
  password: String,
};
const User = mongoose.model("User", userSchema);

app.post("/auth", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.find({ username: username, password: password }, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result.length != 0) {
      res.status(200).send({ message: "OK" });
    } else {
      res.status(200).send({ message: "Wrong" });
    }
  });
});
app.listen(5000, () => console.log("Server running on port 5000"));
