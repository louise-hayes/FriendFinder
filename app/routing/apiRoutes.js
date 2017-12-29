var express = require("express");
var friends = require("../data/friends.js");


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
        var newfriend = req.body;

        console.log(newfriend);

        // We then add the json the user sent to the freinds array
        friends.push(newfriend);
        // extract newfriend scores as number array
        // var result = findmatch(newfriend); to be added in next

        // We then display the JSON to the users

        res.json(newfriend);
        // res.json(result); to be added in next
// 
    });


    // compatibility logic goes here
    //
    //convert each users results into an array of integers
    // friends.forEach(function(element) {
    //     console.log(element);
    // });
    //compare each users scores to those from other users, question by question
    //add up the difference, to calculate the total difference no negative numbers
    // display the result as a pop up modal name and image

    return app;
};


function findmatch(newfriend) {
    var newFriendScoreArray = [];

    newfriend.forEach(element => {
        newFriendScoreArray += parseInt(newfriend.scores);
    });
    console.log(newFriendScoreArray);

    var scoresNumberArray = [];
    friends.forEach(element => {
        foreach.friends.scores(element => {
            scoresNumberArray += parseint(friends.scores);
        })
        
    });
    console.log(scoresNumberArray);
        
        


    return result;

};

module.exports = apifriends;