
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var jobUploadSchema = require('../schema/jobUploadSchema');
var registredJob = mongoose.model('jobAdd', jobUploadSchema.jobUpload);
var check = function(req, res){
  registredJob.find({ $or:[ {"jobType": req.body.section}, {"company": req.body.company},
    {"location": req.body.location}]},
      function(err, data) {
        if (err) {
          return err;
        } else {
          res.json(data);
          console.log(data);
        }
      });
}
module.exports = {
  check: check
};
