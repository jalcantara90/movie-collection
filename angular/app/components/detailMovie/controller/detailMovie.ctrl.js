angular.module('detailMovie').controller('detailMovieCtrl' ,['$scope','detailMovieFactory','$routeParams', function($scope,detailMovieFactory,$routeParams) {

   $scope.movieId = $routeParams.movieId;

    detailMovieFactory.getMovieData($scope.movieId).then(function (infoPelicula) {
        $scope.infoPelicula = infoPelicula;
        }, function (msg) {
        alert(msg);
        console.log('ERROOR');
    });
}])
