const Concert = require('../models/concert');

module.exports = {
  getMyConcert: function (req, res) {
    Concert.find({})
      .then(concerts => {
        res.status(200).send(concerts);
      })
      .catch(err => {
        res.status(500).send(err);
      })
  },
  addMyConcert: function (req, res) {
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
        res.status(500).send(err);
      });
  },
  removeMyConcert: function (req, res) {
    Concert.deleteOne(req.body)
      .then(response => {
        res.sendStatus(204);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  markGoingConcert: function (req, res) {
    Concert.findOne(req.body)
      .then(concert => {
        concert.going = !concert.going;
        return concert.save();
      })
      .then(response => {
        res.sendStatus(204);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
}