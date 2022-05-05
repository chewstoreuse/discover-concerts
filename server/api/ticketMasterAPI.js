require('dotenv').config();
const axios = require('axios');

const apiURL = 'https://app.ticketmaster.com';
const API_KEY = process.env.API_KEY;

module.exports = {
  getConcert: function (req, res) {
    let url = `${apiURL}/discovery/v2/events.json?${req.query.state ? `stateCode=${req.query.state}` : ''}&${req.query.keyword ? `keyword=${req.query.keyword}&` : ''}${req.query.startDate ? `startDateTime=${req.query.startDate}&` : ''}${req.query.endDate ? `endDateTime=${req.query.endDate}&` : ''}classificationName=Music&apikey=${API_KEY}`;

    console.log(url)

    axios.get(url)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err);
      });
  },
}