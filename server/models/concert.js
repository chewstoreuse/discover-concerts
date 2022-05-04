const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
  event: String,
  location: String,
  date: String,
  url: String,
  going: { type: Boolean, default: false }
});

const Concert = mongoose.model('Concert', concertSchema);

module.exports = Concert;