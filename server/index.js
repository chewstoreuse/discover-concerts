const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const controllers = require('./controllers/concert');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/concert', controllers.getConcert)

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});