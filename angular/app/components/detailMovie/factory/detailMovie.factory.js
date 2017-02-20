angular.module('detailMovie').factory('detailMovieFactory', function($http) {
  var factory = {
            getMovieData: function (movieId) {
                //returning promise
                return $http.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=93c5311362abee15fcceeeafefac9991')
                        .then(function (response) {
                            var data = response.data;
                            factory.dataMovie = data;
                            //returning data to resolving promise
                            return factory.dataMovie;
                        }, function (error) {
                            return 'Error al recibir datos en Factory';
                        });
            }
        };
        return factory;
  }
);
