var express = require("express");
var path = require("path");
var app = express();

var filePath = path.join(__dirname, "celine.jpg");
app.use(function (req, res, next) {
  res.sendFile(filePath, function (err) {
    next(new Error("Error sending file!"))
  });
});
app.use(function(err, req, res, next) {
    res.status(500)
    res.send("Internal server error.")
    console.error(err)
    next(err)
})
app.listen(3000, function () {
  console.log("App started on port 3000");
});
