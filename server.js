// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Models 
var Article = require("./models/articles.js");
var Note = require("./models/notes.js");
mongoose.Promise = Promise;

// Store express into a var with port
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configure to MongoDB
var uri = "mongodb://heroku_n5l9t0tg:kgou0hutouhktb4631eo87pjri@ds015919.mlab.com:15919/heroku_n5l9t0tg";
mongoose.connect("mongodb://localhost/LaTimesScraper");
var db = mongoose.connection;


// Routes
var articles = require("./controllers/article_controller");
var notes = require("./controllers/note_controller");

app.get('/', function(req, res) {
    res.render('index');
});

app.use("/articles", articles);
app.use("/notes", notes);


app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
});

module.exports = app;