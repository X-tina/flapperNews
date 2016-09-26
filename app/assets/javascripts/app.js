angular.module('flapperNews', ['ui.router', 'templates'])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: 'home/_home.html',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl'
      })

    $urlRouterProvider.otherwise('home');
  }
])

.factory('posts', [
  '$http',
  function($http) {}
]);
