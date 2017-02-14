movieCollection.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/popular', {
    templateUrl: 'app/templates/movieCollection.html',
    controller: 'movieCtrl'
  })
  .when('/upcoming', {
    templateUrl: 'app/templates/movieCollection.html',
    controller: 'upComingCtrl'
  })
  .when('/nowPlaying', {
    templateUrl: 'app/templates/movieCollection.html',
    controller: 'nowPlayingCtrl'
  })
  .when('/topRated', {
    templateUrl: 'app/templates/movieCollection.html',
    controller: 'topRatedCtrl'
  })
  .otherwise({
    redirectTo: '/popular'
  })
}])

.directive('headerTemplate', [function() {
  return {
    restrict: 'E',
    templateUrl: './app/templates/header.html'
  };
}])
