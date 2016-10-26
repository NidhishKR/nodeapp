var mongoose = require('mongoose');
var jobUploadModel = require('../model');
var express = require('express');

function jobUpload (req, res) {
  jobUploadModel.jobUploadModelIndex.insert(req, res);
}
module.exports = jobUpload;
