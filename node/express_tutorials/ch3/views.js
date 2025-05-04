const express = require("express")()
const path = require("path")

express.set("views", path.resolve(__dirname, "views"));

express.set("view engine", "ejs")

express.get("/", function(req, res) {
    res.render("index", {
        message: "Hey everyone! This is my webpage."
    })
})

express.listen(3000)