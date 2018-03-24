angular.module('branch-dashboard').service('restService', function ($http, $log, $q) {
    var adminURL = "";
    // adminURL = "https://travelibro.com/api";
    adminURL = "https://travelibro.wohlig.com/api";
    var self = this;

    //    function for httpRequest for all methods
    this.httpRequest = function (path, data,method) {
        var deferred = $q.defer();
        var httpObj = {
            method: method,
            url: adminURL + path
        };
        if(method==="get" || method === "GET")
            httpObj.params=data;
        else {
            httpObj.data = data;
        }
        $http(httpObj).then(function (data) {
            //sending data...
            deferred.resolve(data);
        }, function (msg, code) {
            deferred.reject(msg);
            $log.error(msg, code);
        });
        return deferred.promise;
    };

});