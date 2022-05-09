'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var favoriteSoupsSchema = Schema( {
  userId: ObjectId,
  soupId: ObjectId,
} );

module.exports = mongoose.model( 'FavoriteSoups', favoriteSoupsSchema );