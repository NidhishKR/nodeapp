var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var check = function(req, res) {
  console.log(req.body);
  if (req.body.username === 'admin' && req.body.password === 'abc') {
    res.send('OK');
  } else {
    res.send('In correct');
  }
}
module.exports = {
  check: check
};
