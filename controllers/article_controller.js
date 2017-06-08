var cheerio = require("cheerio");
var request = require("request");
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require("../models/articles.js");

router.get("/", function(req, res) {
    db.find({}, function(error, articles) {
        res.render("articles", { article: articles });
    });    
});

module.exports = router;