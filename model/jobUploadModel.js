var mongoose = require('mongoose');
var express = require('express');
var Schema = mongoose.Schema;
var jobUploadSchema = require('../schema/jobUploadSchema');
var registredJob = mongoose.model('jobAdd', jobUploadSchema.jobUpload);
var insert = function(req, res) {
  registredJob.create({
   jobType: req.body.jobType,
   location:req.body.location,
   company:req.body.company,
   email: req.body.email,
   phone: req.body.phone,
   skills:req.body.skills,
   experiance:req.body.experiance,
   salary:req.body.salary,
   workersNeed:req.body.workersNeed,
   status: 'Created'
 }).then(function(err, data) {
     if (err) {
       res.send(err);
     } else {
     res.send(data);
     console.log(data);
   }
 });
}
module.exports = {
  insert: insert
}
