var mongoose = require('mongoose');
var newUpdateModel = require('../model');
var express = require('express');

function newUpdate(req, res) {
  newUpdateModel.newUpdateModelIndex.check(req,res);
}
module.exports = newUpdate;
