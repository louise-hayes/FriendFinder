var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
function htmlRoutes() {
    var app = new express.Router();

    // app.use("/test", function(req, res){
    //     res.json({success:true});
    // });
    app.get("/survey", function (req, res) {
        // res.send("Welcome to the Star Wars Page!")
        res.sendFile(path.join(__dirname, '../public', 'survey.html'));
    });

    // Get all characters
    app.get("/", function (req, res) {
        //   res.json(characters);
        // res.send("Welcome to the Star Wars Page!")
        console.log(__dirname);
        res.sendFile(path.join(__dirname, '../public', 'home.html'));
    });
    return app;
}

module.exports = htmlRoutes;