movieCollection.factory('topRatedFactory', function($http) {
  var factory = {
            getListTopRated: function () {
                //returning promise
                console.log('Factoria...');
                return $http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=93c5311362abee15fcceeeafefac9991')
                    .then(function (response) {
                        var data = response.data;
                        factory.peliculas = data;
                        //returning data to resolving promise
                        return factory.peliculas;
                    }, function (error) {
                        return 'Error al recibir datos en Factory';
                    });
            }
        };
        return factory;
  }
);
