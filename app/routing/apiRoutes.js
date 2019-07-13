var friends = require('../data/friends');
require("../data/calcScores");
// TRYING A BODY PARSER TO GET CLIENT SIDE $.post TO WORK
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

module.exports = function(app){

    app.get("/api/friends", function(req, res){
    res.json(friends);
});

app.post("/api/friends", function(req, res){
    var newUser = req.body;
    console.log("SERVER NEW USER: ", newUser);
    calcScores(newUser, friends)
    friends.push(newUser);
    res.json({name: "name"})
})
};

function calcScores(newUser, friends){
    var newFriend;
    friends.forEach(element => {
        element.scores.forEach((element, index) => {
            console.log("NEW USER: ", newUser)
            var indexScore = element[index] - newUser.scores[][index]
        })
    });
}