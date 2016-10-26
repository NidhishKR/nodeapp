var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var md5 = require("md5");
var signUpUserJobChoiceSchema = require('../schema');
var registeredUserJobChoice = mongoose.model('UserJobChoices', signUpUserJobChoiceSchema.signUpUserJobChoice);
var jobUploadSchema = require('../schema/jobUploadSchema');
var registredJob = mongoose.model('jobAdd', jobUploadSchema.jobUpload);
var search = function(req, res) {
  var userJobChoices = {};
  registeredUserJobChoice.find({
    'email': req.body.email,
    'password': req.body.password
  }).exec(
    function(err, data) {
      if (err) {
        return err;
      } else {
        // res.json(data);
        userJobChoices = data;
        registredJob.find({
          $or: [{
            'location': userJobChoices.location
          }, {
            'company': "TCS"
          }, {
            'company': 'Qburst'
          }, {
            'jobType': userJobChoices.jobType
          }, {
            'salary': userJobChoices.salary
          }]
        }).exec(

          function(err, data) {
            if (err) {
              return err;
            } else {
              res.json(data);
            }
          }
        )
      }
    });
}
module.exports = {
  search: search
};
