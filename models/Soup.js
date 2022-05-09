'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

var soupSchema = new Schema( {
    name: String,
    season: String,
    description: String,
    score: Number,
    vegetarian: Boolean,
    vegan: Boolean,
    ingredients: Mixed,
    recipe: Mixed,
    credits: String,
    url: String,
});

module.exports = mongoose.model('soup-recipe', soupSchema );