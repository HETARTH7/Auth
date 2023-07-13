const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);
