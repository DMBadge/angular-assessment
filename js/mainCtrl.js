angular.module('assessment')
.controller('mainCtrl', function($scope, $state, mainService){

  $scope.getProducts = function(){
    mainService.getProducts()
      .then(function(response){
        $scope.products = response.data;
      });
  };

  $scope.getProduct = function(){
    mainService.getProduct($state.params.id).then(function(response){
      $scope.productDetail = response.data;
    });
  };

  if($state.current.name === 'shop'){ $scope.getProducts(); }
  if($state.current.name === 'details'){ $scope.getProduct(); }


});
