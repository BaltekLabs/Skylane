app.controller('HomeCtrl', function($scope) {

 $scope.goMap = function() {
     
      $state.go("/map"); 
    };

})