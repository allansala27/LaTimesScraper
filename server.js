// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");

// Store express into a var with port
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect to MongoLab
// var uri = "mongodb://heroku_n5l9t0tg:kgou0hutouhktb4631eo87pjri@ds015919.mlab.com:15919/heroku_n5l9t0tg";
// mongoose.connect(uri);

// Routes


app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
});