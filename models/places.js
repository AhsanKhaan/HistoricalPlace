const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  visited:{
    type: Boolean,
    default: false
  }
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
