var mongoose = require('mongoose');
var md5 = require("md5");
var signUpModel = require('../model');
var express = require('express');
function signUpUser(req, res){
  signUpModel.signUpModelIndex.insert(req,res);
}


module.exports = signUpUser ;
