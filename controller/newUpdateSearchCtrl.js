var mongoose = require('mongoose');
var newUpdateSearchModel = require('../model');
var express = require('express');
function newUpdateSearch(req, res) {
  newUpdateSearchModel.newUpdateSearchModelIndex.search(req,res);
}
module.exports = newUpdateSearch;
