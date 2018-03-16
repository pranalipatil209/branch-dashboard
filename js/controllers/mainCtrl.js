angular.module("branch-dashboard")
    .controller("mainCtrl", function($scope, $http, $state, $rootScope) {
        // $rootScope.$state = $state;
        $scope.show = "Welcome to TraveLibro";
        console.log($state.current.name);
    });