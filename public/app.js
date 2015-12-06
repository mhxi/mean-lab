// ANGULAR APP.JS

'use strict';

angular.module('meanApp', ['ui.router', 'ngResource', 'meanApp.controllers', 'meanApp.services'])
    .config(['$stateProvider', '$urlRouteProvider', '$locationProvider', function ($stateProvider, $urlRouteProvider, $locationProvider) {

        $stateProvider
        .state('posts', {
            url: '/',
            templateUrl: 'templates/posts-index',
            controller: 'PostsIndexCtrl'
        })
        .state('post', {
            url: '/posts/:id',
            templateUrl: 'templates/posts-show',
            controller: 'PostsShowCtrl'
        });

        $urlRouteProvider.otherwise('/');

        $locationProvider.html5mode({
            enabled: true,
            requireBase: false
        });

    }]);