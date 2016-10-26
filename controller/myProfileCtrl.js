var mongoose = require('mongoose');
var myProfileModel = require('../model');
var express = require('express');
function myProfileFunction (req, res) {
  myProfileModel.myProfileModelIndex.search(req,res);
}
module.exports = myProfileFunction;
