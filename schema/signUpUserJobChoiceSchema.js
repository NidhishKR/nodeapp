var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var signUpUserJobChoiceSchema = new Schema({
  email: {
    type: String,
    Default: null,
    require: true,
    unique : true
  },
  password: {
    type: String,
    Default: null,
    require: true
  },
  location: {
    type: String,
    Default: null
  },
  company1: {
    type: String,
    Default: null
  },
  company2: {
    type: String,
    Default: null
  },
  jobType: {
    type: String,
    Default: null
  },
  salary: {
    type: String,
    Default: null
  },
  status: {
    type: String,
    Default: null,
    require: false
  },

  error: {
    type: String,
    default: null,
    require: false
  },
  date: { type: Date, default: Date.now }
});
module.exports = signUpUserJobChoiceSchema;
