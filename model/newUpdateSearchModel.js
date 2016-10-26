var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var jobUploadSchema = require('../schema/jobUploadSchema');
var registredJob = mongoose.model('jobAdd', jobUploadSchema.jobUpload);
var search = function(req, res) {
  var searchInputType = ['company', 'jobType', 'location', 'skills', 'experiance', 'salary', 'workersNeed'];
  for (var i = 0; i < 7; i++) {
    if (searchInputType[i] === req.body.type) {
      var searchResult = searchInputType[i];
      var searchEntries = {};
      searchEntries[searchResult] = req.body.field;
      registredJob.find(searchEntries, function(err, data) {
        if (err) {
          return err;
        }else {
          res.json(data);
        }
      });
      return;
    }
  }
}
module.exports = {
  search: search
};
