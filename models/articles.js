var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
	title: {
		type: String,
    	unique: true
	},
	caption: {
		type: String
	},
	notes: [{
   		type: Schema.Types.ObjectId,
    	ref: "notes"
 	}]
});

var Article = mongoose.model("Articles", ArticleSchema);

module.exports = Article; 