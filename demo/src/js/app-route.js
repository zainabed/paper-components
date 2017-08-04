'use strict'

angular.module('appDemo')
  .config(function($stateProvider) {
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
    })
  });
