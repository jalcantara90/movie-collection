movieCollection.controller('movieCtrl' ,['$scope','movieCollectionFactory', function ($scope, movieCollectionFactory) {
  // $scope.peliculas = moviCollectionFactory.getAllMovies();
  movieCollectionFactory.getListPopular($scope.pelis).then(function (peliculas) {
      $scope.peliculas = peliculas;
      console.log($scope.peliculas);
      }, function (msg) {
      alert(msg);
      console.log('ERROOR');
  });

}]);
