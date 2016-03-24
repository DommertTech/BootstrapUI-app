
webApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/partials/frontpage.html',
        controller: 'mainCtrl'        
      }).
      when('/phones/:phoneId', {
        templateUrl: 'templates/partials/about.html',
        controller: 'mainCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);