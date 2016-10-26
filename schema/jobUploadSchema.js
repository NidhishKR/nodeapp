var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jobUpload = new Schema ({
jobType: {
    type: String,
    Default: null,
    require: false
  },

location: {
    type: String,
    Default: null,
    require: false
  },
company: {
    type: String,
    Default: null,
    require: false
  },

  email: {
    type: String,
    Default: null,
    require: true
  },

  phone: {
    type: Number,
    Default: null,
    require: true
  },

  skills: {
    type: String,
    Default: null,
    require: false
  },
  experiance: {
    type: Number,
    Default: null,
    require: true
  },
  salary: {
    type: Number,
    Default: null,
    require: true
  },
  workersNeed: {
    type: Number,
    Default: null,
    require: true
  },
  status: {
    type: String,
    Default: null,
    require: true
  },

  error: {
    type: String,
    Default: null,
    require: true
  },

  date: { type: Date, default: Date.now }
});

module.exports = {jobUpload : jobUpload};
