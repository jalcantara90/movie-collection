movieCollection.controller('nowPlayingCtrl' ,['$scope','nowPlayingFactory', function ($scope, nowPlayingFactory) {
  // $scope.peliculas = moviCollectionFactory.getAllMovies();
  $scope.title = "Now Playing Movies";

  $scope.buscar = function() {
    nowPlayingFactory.getListNowPlaying($scope.pelis).then(function (peliculas) {
        $scope.peliculas = peliculas;
        console.log($scope.peliculas);
        }, function (msg) {
        alert(msg);
        console.log('ERROOR');
    });
  }
  console.log($scope.buscar());

}]);
