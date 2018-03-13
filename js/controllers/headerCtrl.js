angular.module("branch-dashboard")
    .controller("headerCtrl", function($scope, $http, $state, authService) {
        $scope.valid = $.jStorage.get("isLoggedIn");
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
                $(this).collapse('hide');
            }
        });
        $scope.logout = function() {
            authService.logout();
        }
    });