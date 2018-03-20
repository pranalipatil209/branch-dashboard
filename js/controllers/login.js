angular.module("branch-dashboard")
    .controller("loginCtrl", function($scope, $http, $state, authService) {
        authService.skipIfLoggedIn();
        $scope.loginAsUser = function(userForm) {
            console.log('Login As ',userForm);
            $.jStorage.set("isLoggedIn", true);
            $state.go('dashboard.links');
        }
    });