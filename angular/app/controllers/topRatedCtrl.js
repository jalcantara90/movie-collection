movieCollection.controller('topRatedCtrl' ,['$scope','topRatedFactory', function ($scope, topRatedFactory) {
  // $scope.peliculas = moviCollectionFactory.getAllMovies();
  $scope.title = "Top Rated Movies";
  
  $scope.buscar = function() {
    topRatedFactory.getListTopRated($scope.pelis).then(function (peliculas) {
        $scope.peliculas = peliculas;
        console.log($scope.peliculas);
        }, function (msg) {
        alert(msg);
        console.log('ERROOR');
    });
  }
  console.log($scope.buscar());

}]);
