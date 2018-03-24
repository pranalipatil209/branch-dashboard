angular.module("branch-dashboard")
    .controller("loginCtrl", function($scope, $http, $state, authService, restService) {
        authService.skipIfLoggedIn();

        $scope.socialLogin = function(loginTo) {
            ref = window.open(adminURL + "/user/" + loginTo, '_blank', 'location=no');
            stopinterval = $interval(callAtIntervaltwitter, 2000);
        };

        $scope.loginAsUser = function(userForm) {
            console.log('Login As ',userForm);
            $.jStorage.set("isLoggedIn", true);
            $state.go('dashboard.links');
        }
    });