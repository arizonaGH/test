'use strict'

angular.module('xzApp.view_education',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/education/overseas', {
            templateUrl: 'view_education/view_education_overseas.html',
            controller: 'ViewEductionOverseasCtrl'
        });
    }])
    .controller('ViewEductionOverseasCtrl', function ViewEOSController($scope) {

    });