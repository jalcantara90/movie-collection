movieCollection.controller('upComingCtrl' ,['$scope','upComingFactory', function ($scope, upComingFactory) {
  // $scope.peliculas = moviCollectionFactory.getAllMovies();
  $scope.title = "Upcoming Movies";
  
  $scope.buscar = function() {
    upComingFactory.getListUpcoming($scope.pelis).then(function (peliculas) {
        $scope.peliculas = peliculas;
        console.log($scope.peliculas);
        }, function (msg) {
        alert(msg);
        console.log('ERROOR');
    });
  }
  console.log($scope.buscar());

}]);
