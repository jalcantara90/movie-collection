movieCollection.controller('nowPlayingCtrl' ,['$scope','nowPlayingFactory', function ($scope, nowPlayingFactory) {
  // $scope.peliculas = moviCollectionFactory.getAllMovies();
  nowPlayingFactory.getListNowPlaying($scope.pelis).then(function (peliculas) {
      $scope.peliculas = peliculas;
      console.log($scope.peliculas);
      }, function (msg) {
      alert(msg);
      console.log('ERROOR');
  });

}]);
