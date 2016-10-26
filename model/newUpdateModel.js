var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var jobUploadSchema = require('../schema/jobUploadSchema');
var registredJob = mongoose.model('jobAdd', jobUploadSchema.jobUpload);
var check = function(req, res){
  registredJob.find(
      function(err, data) {
        if (err) {
          return err;
        } else {
          res.json(data);
        }
      });
}
module.exports = {
  check : check
};
