var mongoose = require('mongoose');
var md5 = require("md5");
var loginModel = require('../model');
var express = require('express');

function loginUser(req, res) {
  loginModel.loginModelIndex.check(req, res);
}
module.exports = loginUser;
