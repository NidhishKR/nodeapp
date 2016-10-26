var signUpModelIndex = require('./signUpModel');
var loginModelIndex = require('./loginModel');
var loginAdminModelIndex = require('./loginAdminModel');
var jobUploadModelIndex = require('./jobUploadModel');
var newUpdateModelIndex = require('./newUpdateModel');
var homeModelIndex = require('./homeModel');
var newUpdateSearchModelIndex = require ('./newUpdateSearchModel');
var paginationModelIndex = require ('./paginationModel');
var signUpUserJobChoiceModelIndex = require ('./signUpUserJobChoiceModel');
var myProfileModelIndex = require ('./myProfileModel');
//var uploadModelIndex = require('./uploadModel');
modelOutput = {
  signUpModelIndex: signUpModelIndex,
  loginModelIndex: loginModelIndex,
  loginAdminModelIndex: loginAdminModelIndex,
  jobUploadModelIndex : jobUploadModelIndex,
  newUpdateModelIndex : newUpdateModelIndex,
  homeModelIndex : homeModelIndex,
  newUpdateSearchModelIndex : newUpdateSearchModelIndex,
  paginationModelIndex : paginationModelIndex,
  signUpUserJobChoiceModelIndex : signUpUserJobChoiceModelIndex,
  myProfileModelIndex : myProfileModelIndex 
  //uploadModelIndex : uploadModelIndex
}
module.exports = modelOutput;
