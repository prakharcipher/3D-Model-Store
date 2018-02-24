const mongoose = require('mongoose');
const { Schema } = mongoose; // Defining Schema from mongoose

const entitySchema = new Schema({
  // Creating and initialising the entity Schema
  name: { type: String, default: '' },
  mtl: { type: String, default: '' },
  obj: { type: String, default: '' },
  thumb: { type: String, default: '' }
});

module.exports = entitySchema; // exporting the entity Schema
