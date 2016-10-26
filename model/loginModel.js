var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var md5 = require("md5");
var candidatesSchema = require('../schema');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);

var check = function(req, res){
  registeredUser.find( {'email' : req.body.email, 'password' : md5(req.body.password)},
      function(err, data) {
        if (err) {
          return err;
        } else {
           res.json(data);
        }
      });
}
module.exports = {
  check: check
};
