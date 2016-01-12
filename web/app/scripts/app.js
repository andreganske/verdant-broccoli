'use strict';

var verdantApp = angular.module('verdantApp', [
	'ngRoute',
	'ngAnimate',
	'ui.mask',
	'ui.bootstrap',
	'toaster',
	'verdantApp.directives',
	//'verdantApp.filters',
	'verdantService'
]);

verdantApp.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'app/scripts/views/home.html',
		controller: 'HomeController'
	});

});

verdantApp.run(['ParseSDK', '$location', function(verdantService, $location) {

	// getconfig

	// validate login

}]);