var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var md5 = require("md5");
var signUpUserJobChoiceSchema = require('../schema');
var registeredUserJobChoice = mongoose.model('UserJobChoices', signUpUserJobChoiceSchema.signUpUserJobChoice);
var insertJobChoice = function(req, res){
  var newSignUpUserJobChoice = new registeredUserJobChoice ({
    email: req.body.email,
    password: md5(req.body.password),
    location: req.body.signUpUserJobChoice.location,
    company1: req.body.signUpUserJobChoice.company1,
    company2: req.body.signUpUserJobChoice.company2,
    jobType: req.body.signUpUserJobChoice.jobType,
    salary: req.body.signUpUserJobChoice.salary
  })
  newSignUpUserJobChoice.save(
    function(err, data) {
      if (err) {
        return err;
      }
      registeredUserJobChoice.find(
        function(err, data) {
          if (err) {
            return err;
          } else {
            res.json(data);
            console.log(data);
          }
        });
    });
}
module.exports = {
  insertJobChoice : insertJobChoice
};
