const express = require("express");
const logger = require("morgan")
const path = require("path");
const fs = require("fs");


const app = express()

app.use(logger("combined"));

const staticPath = path.join(__dirname, "static")
app.use(express.static(staticPath));

app.use(function (req, res) {
  res.status(404);
  res.send("File not found!");
});

app.listen(3000, function () {
  console.log("App started on port 3000");
});
