const express = require('express'); // importing express module
const mongoose = require('mongoose');
const keys = require('./config/keys'); // importing mongoose module

require('./models/Categories'); // requiring 'categories' schema in the main server

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI); // connecting app to the mlab cloud database

const app = express(); // initialising the Express app

require('./routes/categories')(app); // passing the app to route handler

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8090;
app.listen(PORT);
// app.listen(8090);
