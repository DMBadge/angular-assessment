angular.module('assessment')
.directive('product', function(){
  return {
    restrict: 'E',
    templateUrl: './../views/product-tmpl.html',
    scope: {
      data: '='
    },
    link: function(scope, element, attrs){

      var img = angular.element(angular.element(element.children()[0]).children()[0]);
      var showBtn = angular.element(element.children()[1]);

      img.on('click', function(e){
        img.toggleClass('hide');
        showBtn.toggleClass('hide');
      });

      showBtn.on('click', function(e){
        img.toggleClass('hide');
        showBtn.toggleClass('hide');
      });
      
    }
  };
});
