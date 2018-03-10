angular.module("branch-dashboard",["ui.router", "highcharts-ng"])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider
            .state("dashboard",{
                url:"/dashboard",
                templateUrl:"views/main.html",
                controller:"mainCtrl"
            })
            .state("login",{
                url:"/login",
                templateUrl:"views/login.html",
                controller:"loginCtrl"
            })
    });
/**
 * @method authCheck - to check the authentication for redirection
 * @param $q
 * @param localStorageService
 * @param $location
 * @returns {Promise}
 */
// function authCheck($q,localStorageService,$location) {
//     var deferred = $q.defer();
//     if (localStorageService.get('token')){
//         console.log('authenticated');
//         deferred.resolve();
//     } else {
//         deferred.resolve();
//         $location.path('/login');
//     }
//     return deferred.promise;
// }//end of function