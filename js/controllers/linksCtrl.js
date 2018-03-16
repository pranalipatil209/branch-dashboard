angular.module("branch-dashboard")
    .controller("linksCtrl", function($scope, $http, $state, authService, $timeout) {
        $scope.data1 = "https://docs.angularjs.org/api/ng/filter/";
        $scope.arr = ["facebook","pinterest","twitter","instagram","telegram","google"];
        $scope.can = "";
        $scope.copyText = function(link, channel,index) {
            $scope.can = channel;
            $(".tooltip").removeClass("fadeIn");

            var copy = document.getElementById(channel);
            copy.select();
            document.execCommand("Copy");

            var tooltip = document.getElementById(index);
            tooltip.innerHTML = "Copied!";
            $(".tooltip").css("opacity",1);
            $timeout(function(){
                $(".tooltip").addClass("fadeIn");
                $(".tooltip").css("opacity",0);
            },1000);
        };

    });