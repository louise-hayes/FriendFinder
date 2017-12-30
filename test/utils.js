var assert = require('assert');
var utils = require('../app/utilities/utils.js');
var friends = require('../app/data/friends.js');

describe('utils test', function () {
    beforeEach(function () {


    });

    it('should return score 3 when comparing 2 friends', function () {


        var score1 = ['5',
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ];
        var score2 = [5,
            4,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ];




        var score = utils.compareScores(score1, score2);
        assert.equal(score, 3);

    });

    it('should return score 7 when comparing 2 friends', function () {


        var score1 = [5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ];
        var score2 = [5,
            4,
            2,
            3,
            4,
            1,
            2,
            5,
            4,
            1
        ];




        var score = utils.compareScores(score1, score2);
        assert.equal(score, 7);

    });
    it('should find best match with closest score which is Louise', function () {


        var newFriends = {
            "name": "Test",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [
                '5',
                '1',
                '4',
                '4',
                '5',
                '1',
                '2',
                '5',
                '4',
                '1'
            ]
        };


        var match = utils.findmatch(newFriends, friends);
        console.log(match);
        assert.equal(match.name, 'Louise');


    });

    it('should find best match with closest score which is Jacob', function () {


        var newFriends = {
            "name": "Test2",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [
                5, 5, 1, 1, 1, 1, 1, 1, 1, 1
            ]
        };



        var match = utils.findmatch(newFriends, friends);
        console.log(match);
        assert.equal(match.name, 'Jacob Deming');


    });

    //do a test to see what happens when it finds the closest match raher than a match or finds 2 the same


});