var express = require("express");
var path = require("path");
var http = require("http");
var app = express();
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.use(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Looks like you didn't find a static file.");
});
http.createServer(app).listen(3000);
