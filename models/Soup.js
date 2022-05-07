'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var soupSchema = Schema( {
    name: String,
    season: String,
    description: String,
    score: Number,
    ratings: Number,
    vegetarian: Boolean,
    vegan: Boolean,
    recipe: Mixed,
    credits: Mixed,
    url: String,
} );

module.exports = mongoose.model( 'Soup', soupSchema );