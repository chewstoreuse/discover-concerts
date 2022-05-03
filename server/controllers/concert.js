const Concert = require('../models/concert');

module.exports = {
  getConcert: function (req, res) {
    console.log('get request recieved');
    res.sendStatus(200);
  },
}