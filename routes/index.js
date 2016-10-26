var express = require('express');
var router = express.Router();
var signUpCtrl = require('../controller');
var loginCtrl = require('../controller');
var loginAdminCtrl = require('../controller');
var jobUploadCtrl = require('../controller');
var newUpdateCtrl = require('../controller');
var homeCtrl = require('../controller');
var uploadCtrl = require('../controller');
var newUpdateSearchCtrl = require('../controller');
var paginationCtrl = require('../controller');
var signUpUserJobChoiceCtrl = require('../controller');
var myProfileCtrl = require('../controller');
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Express'
  });
});
router.post('/signUp', signUpCtrl.signUpCtrlIndex);
router.post('/login', loginCtrl.loginCtrlIndex);
router.post('/admin', loginAdminCtrl.loginAdminCtrlIndex);
router.post('/jobUpload', jobUploadCtrl.jobUploadIndex);
router.get('/newUpdate', newUpdateCtrl.newUpdateCtrlIndex);
router.post('/', homeCtrl.homeCtrlIndex);
router.post('/newUpdate', newUpdateSearchCtrl.newUpdateSearchCtrlIndex);
router.post('/pagination', paginationCtrl.paginationCtrlIndex);
router.post('/signUpUserJobChoice', signUpUserJobChoiceCtrl.signUpUserJobChoiceCtrlIndex);
router.post('/myProfile', myProfileCtrl.myProfileCtrlIndex);
//router.post('/upload', uploadCtrl.uploadCtrlIndex);
module.exports = router;
