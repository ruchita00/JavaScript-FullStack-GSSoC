const express = require("express");
const root = express.Router(); //ins

root.get("/", (req, res) => {
  res.json("Hello, GSSoc");
});

module.exports = root;
