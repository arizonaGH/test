
angular.module('xzApp',[
    'ngRoute',
    'xzApp.view_home',
    'xzApp.view_blank',
    'xzApp.view_education' ])
    .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/home'});
        // $routeProvider.
        // when('/phones', {
        //     template: '<div>test1</div>'
        // }).
        // when('/phones/:phoneId', {
        //     template: '<div>test2</div>'
        // }).
        // otherwise('/phones');
    }
]);