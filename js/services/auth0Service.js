/**
 * fileName: authService.js
 * createdBy: Pranali Patil
 * purpose: validates the user and provides authentication throughout the application
 */
angular.module('branch-dashboard').service('authService',authService);
function authService($state){
    /**
     * @method: sets the token while login
     */
    this.loginAuth = function(path,data,cb){
        // restService.postRequest(path,data,cb).success(function(){
        //     $state.go('main');
        // });
        // function cb(data,error){
        //     console.log('token set');
        //     $rootScope.tkn = data.headers()['x-ekincare-key'];
        //     // console.log($rootScope.tkn);
        //     $.jStorage.set('token',data.headers()['x-ekincare-key']);
        // }
    };
    /**
     * @method: authenticates the user when require
     */
    this.isAuthenticated = function(key){
        if(key === $.jStorage.get('token'))
            return true;
        else
            return false;
    };
    this.skipIfLoggedIn = function(){
        if($.jStorage.get("isLoggedIn"))
            $state.go('dashboard');
    };
    /**
     * @method: logout wii erase all the data from previous session
     */
    this.logout = function(){
        $.jStorage.flush();
        $state.go('login');
    };
}