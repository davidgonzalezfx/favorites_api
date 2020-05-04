// websiteModel.js
var mongoose = require('mongoose');
// Setup schema
var websiteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  rate: Number,
  create_date: {
    type: Date,
    default: Date.now,
  },
});
// Export Website model
var Website = (module.exports = mongoose.model('website', websiteSchema));
module.exports.get = function (callback, limit) {
  Website.find(callback).limit(limit);
};
