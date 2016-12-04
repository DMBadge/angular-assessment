angular.module('assessment')
.config(function($stateProvider, $urlRouterProvider){

  var siteprefix = '/angular-assessment';
  $stateProvider
    .state('home', {
      url : siteprefix + '/',
      templateUrl: './../views/home.html',
      controller: 'mainCtrl'
    })
    .state('about', {
      url : siteprefix + '/about',
      templateUrl: './../views/about.html',
      controller: 'mainCtrl'
    })
    .state('blog', {
      url : siteprefix + '/blog',
      templateUrl: './../views/blog.html',
      controller: 'mainCtrl'
    })
    .state('shop', {
      url : siteprefix + '/shop',
      templateUrl: './../views/shop.html',
      controller: 'mainCtrl'
    })
    .state('details', {
      url : siteprefix + '/detail/:id',
      templateUrl: './../views/product-details.html',
      controller: 'mainCtrl'
    });

  $urlRouterProvider.otherwise('/');

});
