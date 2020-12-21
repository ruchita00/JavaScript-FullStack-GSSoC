const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello, GSSoc");
});
app.listen(3100, () => {
  console.log("APL Server Started in port 3100!");
});
app.listen(3200, () => {
  console.log("APL Server Started in port 3200 also!");
});
