var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("Hello, world!");
});

app.listen(3000, function () {
  console.log("Express app started on port 3000.");
});
