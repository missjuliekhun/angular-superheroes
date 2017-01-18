(function(){
  angular
  .module('superheroes')
  .controller('Superheroes', Superheroes);

  SuperheroesCtrl.$inject = ('$http', '$scope');

  //INDEX
  function SuperheroesCtrl($http, $scope) {
    var rootURL = 'http://localhost:3000';

    $scope.getSuperheroes = function(){
      $http.get(function(res){

      })
    }

  }

})();
