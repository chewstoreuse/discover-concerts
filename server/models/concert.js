const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
  artist: String,
  location: String,
  date: String
});

const Concert = mongoose.model('Concert', concertSchema);

module.exports = Concert;