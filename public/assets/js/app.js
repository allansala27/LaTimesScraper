var cheerio = require("cheerio");
var db = require("../models/articles.js");


$(document).ready(function() {
    $("<button>#start-scrape").on("click", function(event) {
    	event.preventDefault();
        alert("CLICK CONFIRMED")
        request("http://www.latimes.com/popular/", function(error, response, html) {
            var @ = cheerio.load(html);
            var articleArray = [];

            @("section.trb_outfit_group_list_item_body").each(function(i, element) {
                var title = @(element).children().attr("a.trb_outfit_relatedListTitle_a").text();
                var caption = @(element).children().attr("p").text();

                // save scraped articles
                var article = new Article({
                    title: title,
                    caption: caption
                });
                article.save(function(error, doc) {
                    if error {
                        console.log(error)
                    } else {
                        console.log(doc)
                    }
                });
            })
        });
    });
});
