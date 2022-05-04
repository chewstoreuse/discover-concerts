const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const controllers = require('./controllers/concert');
const api = require('./api/ticketMasterAPI');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

//api routes
app.get('/api/concert', api.getConcert);

//db routes
app.get('/myConcert', controllers.getMyConcert);
app.post('/myConcert', controllers.addMyConcert);
app.put('/markGoingConcert', controllers.markGoingConcert);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});