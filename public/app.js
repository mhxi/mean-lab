// ANGULAR APP.JS

'use strict';

angular.module('meanApp', ['ui.router', 'ngResource', 'meanApp.controllers', 'meanApp.services'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
        .state('posts', {
            url: '/',
            templateUrl: 'templates/posts-index',
            controller: 'PostsIndexCtrl'
        });
        // .state('post', {
        //     url: '/posts/:id',
        //     templateUrl: 'templates/posts-show',
        //     controller: 'PostsShowCtrl'
        // });

        $urlRouterProvider.otherwise('/state1');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }]);