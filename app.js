var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var md5 = require("md5");
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();
var path = require('path');
var http = require('http');
var multer  = require('multer');
//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);
mongoose.connect('mongodb://mongo/JobPortalMyapp');
var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage })
app.post('/upload', upload.array('file', 2), function(req,res,next){
  res.json(req.files);
   console.log('Uploade Successful ', req.files, req.files[1].filename);
});
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// / error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
}); 
module.exports = app;
