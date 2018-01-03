var assert = require('assert');
var utils = require('../app/utilities/utils.js');
var friends = require('../app/data/friends.js');

describe('utils test', function () {
    beforeEach(function () {


    });

    it('should return score 3 when comparing 2 friends', function () {
       

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
  
});