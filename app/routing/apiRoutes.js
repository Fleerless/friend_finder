var friends = require('../data/friends');
// TRYING A BODY PARSER TO GET CLIENT SIDE $.post TO WORK
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

module.exports = function(app){

    app.get("/api/friends", function(req, res){
    res.json(friends);
});

app.post("/api/friends", function(req, res){
    var newUser = req.body;
    calcScores(newUser, friends)
    friends.push(newUser);
    res.json(friends[newFriend.index])
})
};

var newFriend = {
    score: 1000,
    index: 0
}

function calcScores(newUser, friends){
    friends.forEach((element, index) => {
        var newFriendScore = 0;
        var Findex = index
        element.scores.forEach((element, index) => {
            var newFriendMath;
            var indexScore = element;
            var userScore = parseInt(newUser.scores[index]);
            newFriendMath = indexScore - userScore;
            newFriendScore = newFriendScore + newFriendMath;
        })
        if (Math.abs(newFriendScore) < newFriend.score){
            newFriend.score = newFriendScore;
            newFriend.index = Findex;
        }
    });
}