(function(){
  angular
  .module('superheroes')
  .controller('SuperheroesCtrl', SuperheroesCtrl);

  SuperheroesCtrl.$inject = ['$http', '$scope'];
  console.log("cool")


  function SuperheroesCtrl($http, $scope){
    var rootURL = 'http://localhost:3000';

// INDEX
$scope.heroes = heroes;

  }
})();
