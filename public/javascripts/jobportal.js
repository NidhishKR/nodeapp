var job = angular.module('jobportal', ['ngRoute', 'ui.bootstrap']);
job.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../view/home.html",
      controller: "homeCtrl"
    })
    .when("/login", {
      templateUrl: "../view/login.html",
      controller: "loginCtrl"
    })
    .when("/signUp", {
      templateUrl: "../view/signUp.html",
      controller: "signUpCtrl"
    })
    .when("/signUpUserJobChoice", {
      templateUrl: "../view/signUpUserJobChoice.html",
      controller: "signUpUserJobChoiceCtrl"
    })
    .when("/myProfile", {
      templateUrl: "../view/myProfile.html",
      controller: "myProfileCtrl"
    })
    .when("/admin", {
      templateUrl: "../view/admin.html",
      controller: "adminCtrl1"
    })
    .when("/jobUpload", {
      templateUrl: "../view/jobUpload.html",
      controller: "jobUploadCtrl1"
    })
    .when("/newUpdate", {
      templateUrl: "../view/newUpdate.html",
      controller: "newUpdateCtrl"
    })
    .when("/searchResult", {
      templateUrl: "../view/searchResult.html",
      controller: "searchResultCtrl"
    })
    .when("/resume", {
      templateUrl: "../view/resume.html"
    })
    .when("/upload", {
      templateUrl: "../view/fileUpload.html",
      controller: "fileUploadtCtrl"
    })
    .when("/debug", {
      templateUrl: "../view/searchResult.html",
      controller: "searchResultCtrl"
    })
    .when("/view myReume", {
      templateUrl: "../view/searchResult.html",
      controller: "searchResultCtrl"
    });

});
job.controller("homeCtrl", function($scope, $http) {
  $scope.searchFunction = function(search) {
    $http.post('/', $scope.search)
      .then(function(response) {

         $scope.job = response.data;
         localStorage.setItem("job", JSON.stringify([$scope.job]));
      });
  }
  $scope.logOutFunction = function() {
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        var cb = c.split('=');
        var exdays = 30;
        var d = new Date();
        d.setTime(d.getTime() - (exdays*24*60*60*10000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = 'email'+"= "+cb[1]+"; "+expires;
        document.cookie = 'password'+"="+cb[1]+"; "+expires;
    }
  }
});
job.controller("loginCtrl", function($scope, $http, $location) {
  $scope.verification = function(login) {
    return $http.post('/login', $scope.login)
      .then(function(response) {
        $scope.user = response.data;
        console.log($scope.user[0].email);
          if ($scope.user[0].email === login.email) {
            console.log("validate");
            var exdays = 30;
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = 'email'+"= "+login.email+"; "+expires;
            document.cookie = 'password'+"="+login.password+"; "+expires;
            $location.path('/myProfile');
            return;
          } else {
            $scope.msg = "incorrect entry";
            console.log(msg);
            $location.path('/login');
          }

      });
  }
});
job.controller("signUpCtrl", function($scope, $http) {
  $scope.signUpFunction = function(signUp) {
    if (signUp.password === signUp.password1 && signUp.username != '' && signUp.email != '' &&
      signUp.email != undefined && signUp.dob != '') {
      $scope.sign = "signUpUserJobChoice";
      return $http.post('/signUp', $scope.signUp)
        .then(function(response) {
          var exdays = 30;
          var d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          var expires = "expires=" + d.toGMTString();
          document.cookie = 'email'+"="+signUp.email+"; "+expires;
          document.cookie = 'password'+"="+signUp.password+"; "+expires;

        }, function(err) {});
    } else if (signUp.password != signUp.password1) {
      $scope.sign = "signUp";
      $scope.msg = "password mismatch"
    } else {
      $scope.sign = "signUp";
      $scope.msg = "Enter all feild currectely for signUp"
    }
  }
});
job.controller("signUpUserJobChoiceCtrl", function($scope, $http) {
    $scope.signUpUserJobChoiceFunction = function(signUpUserJobChoice) {
      var savedCookie = document.cookie.split(';');
      for(var i=0; i<savedCookie.length; i++) {
          var cookie = savedCookie[i];
          //console.log(ca[i]);
          var cookieValue = cookie.split('=');
          if (cookieValue[0] === "email") {
             var email = cookieValue[1];
          }else {
            var password = cookieValue[1];
          }
        }

      user = {
        email : email,
        password : password,
        signUpUserJobChoice : signUpUserJobChoice
      }
      console.log(user);
      $http.post('/signUpUserJobChoice', user)
        .then(function(response) {
          console.log(user);
          console.log(response.data);
        })

    }
});
job.controller("myProfileCtrl", function($scope, $http) {
  var savedCookie = document.cookie.split(';');
  for(var i=0; i<savedCookie.length; i++) {
      var cookie = savedCookie[i];
      var cookieValue = cookie.split('=');
      if (cookieValue[0] === "email") {
         var email = cookieValue[1];
      }else {
        var password = cookieValue[1];
      }
    }

  user = {
    email : email,
    password : password
  }
  $http.post('/myProfile', user)
    .then(function(response) {
      $scope.job = response.data;
      console.log(response.data);
    })
});
job.controller("adminCtrl1", function($scope, $http) {
  $scope.jobUpload = "/#";
  $scope.loginAdminFunction = function(loginAdmin) {
    $http.post('/admin', $scope.loginAdmin)
      .then(function(response) {
        alert("corret user");
        if (response.data === 'OK') {
          $scope.jobUpload = 'jobUpload';
        }
      });
  }
});
job.controller("jobUploadCtrl1", function($scope, $http) {
  $scope.jobUploadFunction = function(jobUpload) {
    $http.post('/jobUpload', $scope.jobUpload)
      .then(function(response) {
        //console.log(response.data);
      });
  }
});
job.filter('startfrom', function() {
 return function(data, start) {
   if (!data || !data.length) { return; }

   return data.slice(start);
 }

});
job.controller("newUpdateCtrl", function($scope, $http) {
    $scope.maxSize = 15;
    $scope.currentPage = 1;
    $scope.numPerPage =4;
    $scope.$watch('currentPage', function(){
             page = {
              page: (($scope.currentPage - 1) * $scope.numPerPage)
            }
            $http.post('/pagination', page).then(function(response) {
              $scope.job = response.data;
              console.log($scope.job);
            });
          });
    $scope.newUpdateSearchFunction=function(serachInput) {
    $http.post('/newUpdate', $scope.serachInput)
    .then(function(response) {
    console.log(response.data);
    $scope.job = response.data;
    });
  }
});
job.controller("searchResultCtrl", function($scope) {
  $scope.job = JSON.parse(localStorage.getItem("job"));
});

job.directive('fileModel', ['$parse', function ($parse) {
   return {
      restrict: 'A',
      link: function(scope, element, attrs) {
         var model = $parse(attrs.fileModel);
         var modelSetter = model.assign;

         element.bind('change', function(){
            scope.$apply(function(){
               modelSetter(scope, element[0].files[0]);
            });
         });
      }
   };
}]);

job.service('fileUpload', ['$http', function ($http) {
   this.uploadFileToUrl = function(file, uploadUrl){
      var fd = new FormData();
      fd.append('file', file[0]);
      fd.append('file', file[1]);

      $http.post(uploadUrl, fd, {
         transformRequest: angular.identity,
         headers: {'Content-Type': undefined}
      })

      .success(function(response){
        console.log(response);
      })

      .error(function(){
      });
   }
}]);

job.controller('fileUploadtCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
  $scope.myFile = [];
   $scope.uploadFile = function(){
      var file = $scope.myFile;
      var uploadUrl = "/upload";
      fileUpload.uploadFileToUrl(file, uploadUrl);
   };
}]);
