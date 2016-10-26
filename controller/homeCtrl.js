var mongoose = require('mongoose');
var homeModel = require('../model');
var express = require('express');

function homeSearch(req, res) {
  homeModel.homeModelIndex.check(req, res);
}
module.exports = homeSearch;
