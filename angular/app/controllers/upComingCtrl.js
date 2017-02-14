movieCollection.controller('upComingCtrl' ,['$scope','upComingFactory', function ($scope, upComingFactory) {
  // $scope.peliculas = moviCollectionFactory.getAllMovies();
  upComingFactory.getListUpcoming($scope.pelis).then(function (peliculas) {
      $scope.peliculas = peliculas;
      console.log($scope.peliculas);
      }, function (msg) {
      alert(msg);
      console.log('ERROOR');
  });

}]);
