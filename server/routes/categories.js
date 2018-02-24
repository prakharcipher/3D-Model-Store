const mongoose = require('mongoose');
const Category = mongoose.model('categories'); // Modeling 'caegories ' schema to Category

module.exports = app => {
  app.get('/api', async (req, res) => {
    const categories = await Category.find({}).select(); // Fetching all documents of 'categories' collection
    res.send(categories); // Sending the JSON array to the GET api endpoint
  });
};
