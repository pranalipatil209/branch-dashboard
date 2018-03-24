angular.module("branch-dashboard")
    .controller("mainCtrl", function($scope, $http, $state, $rootScope, restService) {
        // $rootScope.$state = $state;
        $scope.blur1 = false;
        $scope.show = "Welcome to TraveLibro";
        console.log($state.current.name);
        // $scope.isAdmin = true;
        // $scope.Admin = false;
        $scope.showOverlay = function() {
            $scope.blur1 = true;
            $(".overlay").css("display","block");
        };
        $scope.closeOverlay = function() {
            $scope.blur1 = false;
            $(".overlay").css("display","none");
        };
        $scope.gotBlogger = function () {
            $scope.isAdmin = false;
            $scope.closeOverlay();
        }
    });