var webApp = angular.module('webApp', ['ui.bootstrap', 'ngRoute']);

webApp.controller('mainCtrl',
	function($scope){
		$scope.message = "Angular is working";
	});

webApp.controller('buttonCtrl', 
	function($scope){
		$scope.singleModel = 1;
});