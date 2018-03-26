angular.module("branch-dashboard")
    .controller("loginCtrl", function($scope, $http, $state, authService, restService, $interval, $stateParams) {
        console.log($stateParams.id,$stateParams.isadmin);
        authService.skipIfLoggedIn();
        $scope.google = adminURL+"useradmin/loginGoogleBranch?returnUrlBranch="+window.location.origin+"/login";
        $scope.facebook = adminURL+"useradmin/loginFacebookBranch?returnUrlBranch="+window.location.origin+"/login";
         var callAtIntervaltwitter = function () {
            // NavigationService.getAccessToken(checktwitter, function (err) {
                console.log(ref);
            // });
        };

        $scope.socialLogin = function(loginTo) {
            ref = window.open(adminURL + "/useradmin/" + loginTo);
            // stopinterval = $interval(callAtIntervaltwitter, 2000);
        };

        $scope.loginAsUser = function(userForm) {
            console.log('Login As ',userForm);
            $.jStorage.set("isLoggedIn", true);
            $state.go('dashboard.links');
        }
    });