'use strict'

angular.module('xzApp.view_blank',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/blank', {
            templateUrl: 'view_blank/view_blank.html',
            controller: 'ViewBlankCtrl'
        });
    }])
    .controller('ViewBlankCtrl',function(){

    });