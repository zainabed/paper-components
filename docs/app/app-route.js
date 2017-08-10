'use strict';

(function(){
  angular.module('paper-component')
  .config(function($stateProvider, $locationProvider, $urlRouterProvider){
    $stateProvider.state('home', {
      url: '/',
      views: {
        header: {
          templateUrl: 'header/header.tpl.html',
        },
        'side-nav': {
          templateUrl: 'side-nav/component.tpl.html',
          controller: 'SideNavController',
          controllerAs: '$ctrl'
        },
        content: {},
        footer: {
          templateUrl: 'footer/footer.tpl.html'
        }
      }
    });

    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);
  });

})();
