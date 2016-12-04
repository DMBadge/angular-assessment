angular.module('assessment')
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url : '/angular-assessment/',
      templateUrl: './../views/home.html',
      controller: 'mainCtrl'
    })
    .state('about', {
      url : '/angular-assessment/about',
      templateUrl: './../views/about.html',
      controller: 'mainCtrl'
    })
    .state('blog', {
      url : '/angular-assessment/blog',
      templateUrl: './../views/blog.html',
      controller: 'mainCtrl'
    })
    .state('shop', {
      url : '/angular-assessment/shop',
      templateUrl: './../views/shop.html',
      controller: 'mainCtrl'
    })
    .state('details', {
      url : '/angular-assessment/detail/:id',
      templateUrl: './../views/product-details.html',
      controller: 'mainCtrl'
    });

  $urlRouterProvider.otherwise('/angular-assessment/');

});
