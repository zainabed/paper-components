'use strict'

angular.module('paper-component')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      views: {
        header: {
          templateUrl: 'header/base.tpl.html'
        },
        sideView: {
          templateUrl: 'sideView/base.tpl.html'
        },
        content: {}
      }
    });
    $urlRouterProvider.otherwise('/');
  });
