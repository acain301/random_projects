var express = require("express");
var http = require("http");
var app = express();

app.use(function (req, res, next) {
  console.log("In comes a " + req.method + " request to " + req.url);
  next();
});

app.use(function (req, res, next) {
  const minute = new Date().getMinutes();
  if (minute % 2 === 0) {
    next();
  } else {
    res.statusCode = 403;
    res.end("Not authorized.");
  }
});

app.use(function (req, res) {
  // res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Secret info: the password is 'gorilla'!");
});

http.createServer(app).listen(3000);
