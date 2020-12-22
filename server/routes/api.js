const express = require("express");
const api = express.Router(); //instance of router

api.get("/users", (req, res) => {
  const users = ["Alpha", "Beta", "Gamma", "Delta", "Esilon", "sigma"];
  res.json(users);
});

api.get("/sayHello", (req, res) => {
  res.json("Hello, GSSoC");
});

module.exports = api;
