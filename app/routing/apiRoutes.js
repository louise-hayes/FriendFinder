var express = require("express");
var friends = require("../data/friends.js");
var utils = require("../utilities/utils.js");


function apifriends() {
    var app = new express.Router();

    // Search for Specific Friend (or all friends) - provides JSON
    app.get("/friend/:friendid", function (req, res) {

        var chosen = req.params.friendid;

        if (chosen) {
            console.log(chosen);

            for (var i = 0; i < friends.length; i++) {
                if (chosen === friends[i].name) {
                    return res.json(friends[i]);
                }
            }
            return res.json(false);
        }
        return res.json(friends);
    });

    // all friends
    app.get("/friend/", function (req, res) {

        console.log("all friends");
        return res.json(friends);
    });



    //--------POSTMAN code
    // postman will post, browser will only run Gets
    //set up a post function, send it the route, , give it an anonymous fuinction 

    // Create New friend - takes in JSON input

    app.post("/friend", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        console.log("req body section");
        console.log(req.body);

        var newfriend = req.body;
        // var newfriend = {
        //     "name": "Test",
        //     "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        //     "scores": [
        //         '5',
        //         '1',
        //         '4',
        //         '4',
        //         '5',
        //         '1',
        //         '2',
        //         '5',
        //         '4',
        //         '1'
        //     ]
        // };

        // console.log(newfriend + " sending this to utils find match method");
        
        //  newfriend  to be checked against all friends in a function findmatch, returns a matching friend object
        var result = utils.findmatch(newfriend,friends); 
        // We then add the json the user sent to the freinds array
        friends.push(newfriend);
        // We then sen the JSON to the users
        res.json(result);

    });


    

    return app;
};


module.exports = apifriends;