var mongoose = require('mongoose');
var paginationModel = require('../model');
var express = require('express');

function pagination(req, res) {
  paginationModel.paginationModelIndex.pagination(req,res);
}
module.exports = pagination;
