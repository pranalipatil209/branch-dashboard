angular.module("branch-dashboard",["ui.router", "highcharts-ng"])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider
            .state("dashboard",{
                url:"/dashboard",
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
            .state("dashboard.links",{
                url:"/links",
                templateUrl:"views/login.html",
                controller:"",
            })
            .state("dashboard.analytics",{
                url:"/links",
                templateUrl:"views/login.html",
                controller:"",
            })
            .state("dashboard.summary",{
                url:"/links",
                templateUrl:"views/login.html",
                controller:"",
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
