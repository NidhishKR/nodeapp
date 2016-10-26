var mongoose = require('mongoose');
var md5 = require('md5');
var express = require('express');
var Schema = mongoose.Schema;
var candidatesSchema = require('../schema');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);
var insert = function(req, res) {
console.log("aaaaaa", req.body);
  var newSignUpUser = new registeredUser ({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: md5(req.body.password),
    dob: req.body.dob,
    status: 'Created'
  });
  newSignUpUser.save(
    function(err, data) {
      if (err) {
        return err;
      }
      registeredUser.find(
        function(err, data) {
          if (err) {
            return err;
          } else {
            res.json(data);
          }
        });
    });
}
module.exports = {
  insert: insert
};
