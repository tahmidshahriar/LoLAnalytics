// set up
var express = require('express');
var async = require('async');

var app = express();

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users

var PORT = 3000;

// routes
require('./app/routes.js')(app);

// listen
app.listen(PORT, function() {
  console.log("Application running on port:", PORT);
});