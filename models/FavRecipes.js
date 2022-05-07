'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var favRecipesSchema = Schema( {
  userId: ObjectId,
  recipeId: ObjectId,
} );

module.exports = mongoose.model( 'FavRecipes', favRecipesSchema );