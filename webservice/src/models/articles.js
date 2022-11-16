const mongoose = require("../database");
const mongoosePaginate = require('mongoose-paginate');

const ArticleSchema = new mongoose.Schema({
        id: {
            type: Number,
            require: true,
            unique: true
        },
        featured:{
            type: Boolean
        } ,
        title:{
            type: String,
            require: true,
        },
        url:{
            type: String,
        },
        imageUrl:{
            type: String,
        },
        newsSite: {
            type: String,
        },
        summary: {
            type: String,
        },
        publishedAt: {
            type: String,
        },
        launches: {
            type: Array,
        },
        events: {
                type: Array,
            }
});
ArticleSchema.plugin(mongoosePaginate);
const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;