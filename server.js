// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000; 
// This allows you to get the port from the bound environment variable (using process.env.PORT) if it exists, so that when your app starts on heroku's machine it will start listening on the appropriate port.

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use("/test", function(req, res){
//     res.json({success:true});
// })
app.use("/api", require("./app/routing/apiRoutes.js")());  //return json
app.use("/", require("./app/routing/htmlRoutes.js")());   // return html
//app.use(express.static(__dirname + '/app/public'));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
