var mongoose = require('mongoose');
var loginAdminModel = require('../model');
var express = require('express');

function loginAdmin(req, res) {
  loginAdminModel.loginAdminModelIndex.check(req, res);
}
module.exports = loginAdmin;
