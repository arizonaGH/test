'use strict'

angular.module('xzApp.view_home', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'view_home/view_home.html',
            controller: 'ViewHomeCtrl'
        });
    }])
    .controller('ViewHomeCtrl', function ViewHomeController($scope) {
        $scope.schools=[
            {'name':'麻省，圣约瑟夫预备高中','desp':'Saint Joseph Preparatory High School','img':'image/sjschool.jpg'},
            {'name':'旧金山，可里兰学校','desp':'The Quarry Lane School','img':'image/mhschool.jpg'},
            {'name':'华盛顿州，圣约高中','desp':'Covenant High School','img':'image/mpschool.png'}
        ];

        $scope.activities=[
            {'name':'2018俄罗斯世界杯','desp':'为赴俄罗斯观看2018世界杯足球赛的全国球迷和港澳台球迷们协助购买球赛票、机票预订、住宿、餐饮和接送等一站式服务','img':'image/worldcup.jpg'},
            {'name':'伊萨基辅教堂','desp':'为赴莫斯科、圣彼得堡、比什凯克等一线城市高端商贸团、豪华旅游团提供国内外一站式服务及其它项目的开发','img':'image/church2.jpg'},
            {'name':'冬宫','desp':'为赴莫斯科、圣彼得堡、比什凯克等一线城市高端商贸团、豪华旅游团提供国内外一站式服务及其它项目的开发','img':'image/palace3.jpg'}];
    });