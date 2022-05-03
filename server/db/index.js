const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/concert')
  .then(() => {
    console.log('db connected successfully');
  })
  .catch((err) => {
    console.log('db connection failed: ', err);
  });