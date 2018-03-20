angular.module("branch-dashboard",["ui.router", "highcharts-ng", "ngSanitize", "ui.select"])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/dashboard/links");
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
                templateUrl:"views/links.html",
                controller:"linksCtrl",
                resolve : {
                    authCheck : authCheck
                }
            })
            .state("dashboard.analytics",{
                url:"/analytics",
                templateUrl:"views/analytics.html",
                controller:"analyticsCtrl",
                resolve : {
                    authCheck : authCheck
                }
            })
            .state("dashboard.summary",{
                url:"/summary",
                templateUrl:"views/summary.html",
                controller:"summaryCtrl",
                resolve : {
                    authCheck : authCheck
                }
            })

    });
/**
 * @method authCheck - to check the authentication for redirection
 * @param $q
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
