var express = require('express');
var path    = require('path');

var app     = express();

var PORT = 8080;

// INIT MIDDLEWARE TRYING TO GET CLIENT SIDE $.post TO WORK
// THIS DID NOT WORK
app.use(express.json());
app.use(express.urlencoded({extended: true}));


require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function(){
    console.log("App listening on PORT ", PORT)
})