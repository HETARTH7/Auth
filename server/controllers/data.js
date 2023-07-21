const express = require("express");

const UserData = (req, res) => {
  return res.json("hello");
};

const AdminData = (req, res) => {
  return res.json("hello");
};

module.exports = { UserData, AdminData };
