var signUpCtrlIndex = require('./signUpCtrl');
var loginCtrlIndex = require('./loginCtrl');
var loginAdminCtrlIndex = require('./loginAdminCtrl');
var jobUploadIndex = require('./jobUploadCtrl');
var newUpdateCtrlIndex = require('./newUpdateCtrl');
var homeCtrlIndex = require ('./homeCtrl');
var newUpdateSearchCtrlIndex = require('./newUpdateSearchCtrl');
var paginationCtrlIndex = require('./paginationCtrl');
var signUpUserJobChoiceCtrlIndex = require('./signUpUserJobChoiceCtrl');
var myProfileCtrlIndex = require('./myProfileCtrl');
//var uploadCtrlIndex = require ('./uploadCtrl');
var controllerOutput = {
  signUpCtrlIndex: signUpCtrlIndex,
  loginCtrlIndex: loginCtrlIndex,
  loginAdminCtrlIndex : loginAdminCtrlIndex,
  jobUploadIndex : jobUploadIndex,
  newUpdateCtrlIndex : newUpdateCtrlIndex,
  homeCtrlIndex : homeCtrlIndex,
  newUpdateSearchCtrlIndex : newUpdateSearchCtrlIndex,
  paginationCtrlIndex : paginationCtrlIndex,
  signUpUserJobChoiceCtrlIndex : signUpUserJobChoiceCtrlIndex,
  myProfileCtrlIndex : myProfileCtrlIndex
//  uploadCtrlIndex : uploadCtrlIndex
}
module.exports = controllerOutput;
