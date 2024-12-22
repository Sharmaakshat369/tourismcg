const mongoose = require('mongoose');

const touristPlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    lat: Number,
    lng: Number,
  },
  description: {
    type: String,
    required: true,
  },
  bestTime: String,
  entryFee: String,
  timings: String,
  images: [String],
  activities: [String],
  category: {
    type: String,
    enum: ['nature', 'culture', 'adventure', 'spiritual'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('TouristPlace', touristPlaceSchema);
