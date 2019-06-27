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
    console.log("SERVER req.body: ", req.body);
    friends.push(newUser)

    res.json(newUser)
})
}