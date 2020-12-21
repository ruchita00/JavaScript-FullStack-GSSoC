const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello, GSSoc");
});

app.get("/api/users", (req, res) => {
  const users = ["Alpha", "Beta", "Gamma", "Delta"];
  res.json(users);
});

app.get("/api/sayHello", (req, res) => {
  res.json("Hello, GSSoC");
});

app.listen(3100, () => {
  console.log("APL Server Started in port 3100!");
});
app.listen(3200, () => {
  console.log("APL Server Started in port 3200 also!");
});
