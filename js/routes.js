angular.module('assessment')
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url : '/',
      templateUrl: '/angular-assessment/views/home.html',
      controller: 'mainCtrl'
    })
    .state('about', {
      url : '/about',
      templateUrl: '/angular-assessment/views/about.html',
      controller: 'mainCtrl'
    })
    .state('blog', {
      url : '/blog',
      templateUrl: '/angular-assessment/views/blog.html',
      controller: 'mainCtrl'
    })
    .state('shop', {
      url : '/shop',
      templateUrl: '/angular-assessment/views/shop.html',
      controller: 'mainCtrl'
    })
    .state('details', {
      url : '/detail/:id',
      templateUrl: '/angular-assessment/views/product-details.html',
      controller: 'mainCtrl'
    });

  $urlRouterProvider.otherwise('/');

});
