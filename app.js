angular.module("branch-dashboard",["ui.router", "highcharts-ng"])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("dashboard",{
                url:"/",
                templateUrl:"views/main.html",
                controller:"mainCtrl",
                resolve : {
                    authCheck : authCheck
                }
            })
            .state("login",{
                url:"/login",
                templateUrl:"views/login.html",
                controller:"loginCtrl",
                resolve : {
                    authCheck : authCheck
                }
            })
    });
/**
 * @method authCheck - to check the authentication for redirection
 * @param $q
 * @param localStorageService
 * @param $location
 * @returns {Promise}
 */
function authCheck($q,$location) {
    var deferred = $q.defer();
    if ($.jStorage.get("isLoggedIn")){
        console.log('authenticated');
        deferred.resolve();
    } else {
        deferred.resolve();
        $location.path('/login');
    }
    return deferred.promise;
}//end of function
