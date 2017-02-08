movieCollection.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/popular', {
    templateUrl: 'app/templates/movieCollection.html',
    controller: 'movieCtrl'
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
