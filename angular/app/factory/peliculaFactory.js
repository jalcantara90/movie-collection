movieCollection.factory('movieCollectionFactory', function($http) {
  var factory = {
            getList: function () {
                //returning promise
                console.log('Factoria...');
                return $http.get('http://api.tvmaze.com/shows')
                    .then(function (response) {
                        var data = response.data;
                        factory.peliculas = data;
                        console.log(factory.plataformas);
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
