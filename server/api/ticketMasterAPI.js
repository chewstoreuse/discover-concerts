require('dotenv').config();
const axios = require('axios');

const apiURL = 'https://app.ticketmaster.com';
const API_KEY = process.env.API_KEY;

module.exports = {
  getConcert: function (req, res) {
    let url = `${apiURL}/discovery/v2/events.json?${req.query.state ? `stateCode=${req.query.state}` : ''}&keyword=${req.query.keyword}&classificationName=Music&apikey=${API_KEY}`;

    axios.get(url)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
}