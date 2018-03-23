angular.module("branch-dashboard")
    .controller("mainCtrl", function($scope, $http, $state, $rootScope) {
        // $rootScope.$state = $state;
        $scope.blur1 = false;
        $scope.show = "Welcome to TraveLibro";
        console.log($state.current.name);
        $scope.isAdmin = true;
        $scope.showOverlay = function() {
            $scope.blur1 = true;
            $(".overlay").css("display","block");
        };
        $scope.removeOverlay = function() {
            $scope.blur1 = false;
            $(".overlay").css("opacity","none");
        }
    });