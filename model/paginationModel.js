var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var jobUploadSchema = require('../schema/jobUploadSchema');
var registredJob = mongoose.model('jobAdd', jobUploadSchema.jobUpload);
var pagination = function(req, res){
registredJob.find().skip(req.body.page).limit(4).exec(
        function(err, data) {
        if (err) {
          return err;
        } else {
          res.json(data);
        }
      }

)}
module.exports = {
  pagination : pagination
};
