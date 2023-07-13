const express = require("express");

const GetData = (req, res) => {
  return res.json("hello");
};

module.exports = { GetData };
