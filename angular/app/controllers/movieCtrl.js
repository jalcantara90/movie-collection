movieCollection.controller('movieCtrl' ,['$scope','movieCollectionFactory', function ($scope, movieCollectionFactory) {
  // $scope.peliculas = moviCollectionFactory.getAllMovies();
  $scope.title = "Movie Collection";
  
  $scope.buscar = function() {
    movieCollectionFactory.getListPopular($scope.pelis).then(function (peliculas) {
        $scope.peliculas = peliculas;
        console.log($scope.peliculas);
        }, function (msg) {
        alert(msg);
        console.log('ERROOR');
    });
  }
  console.log($scope.buscar());

}]);
