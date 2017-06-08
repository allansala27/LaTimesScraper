var cheerio = require("cheerio");
var request = require("request");
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require("../models/notes.js");

router.get("/", function(req, res) {
    res.render("notes");
});

module.exports = router;