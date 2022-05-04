const Concert = require('../models/concert');

module.exports = {
  getMyConcert: function (req, res) {
    console.log('get request recieved');
    res.sendStatus(200);
  },
  addMyConcert: function (req, res) {
    console.log(req.body);
    let conditions = {
      event: req.body.event,
      location: req.body.location
    };

    let update = {
      date: req.body.date,
      url: req.body.url
    };

    Concert.findOneAndUpdate(conditions, update, {
      new: true,
      upsert: true
    })
      .then(response => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log(err);
      });
  }
}