function findmatch(newFriend, friends) {
    console.log("scores being passed " + newFriend.scores);
    var lowestScore = 0;
    var matchIndex;
    friends.forEach(function (element, i) {
        console.log("score being checked for " + element.name);
        var score = compareScores(newFriend.scores, element.scores);

        if (!matchIndex && matchIndex !== 0) {
            matchIndex = i;
            lowestScore = score;
        } else if (score < lowestScore) {
            lowestScore = score;
            matchIndex = i;
        }
    });
    console.log(" Their index  is " + matchIndex + " name " + friends[matchIndex].name);
    return friends[matchIndex];
};

function compareScores(score1, score2) {
    var score = 0;
    score1.forEach(function (element, i) {
        tempsum = Math.abs(element - score2[i]);
        score += tempsum;
    });
    console.log(score + " is their score  ");
    return score;
}

module.exports.findmatch = findmatch;
module.exports.compareScores = compareScores;