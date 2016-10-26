var mongoose = require('mongoose');
var md5 = require("md5");
var signUpUserJobChoiceModel = require('../model');
var express = require('express');
function signUpUserJobChoice (req, res){
  signUpUserJobChoiceModel.signUpUserJobChoiceModelIndex.insertJobChoice(req,res);
}


module.exports = signUpUserJobChoice;
