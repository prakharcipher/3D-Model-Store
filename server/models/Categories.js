const mongoose = require('mongoose');
const { Schema } = mongoose; // Defining Schema from mongoose
const EntitySchema = require('./Entities'); // importing the sub collection 'entities'

const categorySchema = new Schema({
  // Defining the categories Schema and initialising it
  name: { type: String, default: '' },
  entities: [EntitySchema]
});

mongoose.model('categories', categorySchema); // creating the mongoose model for 'categories' schema
