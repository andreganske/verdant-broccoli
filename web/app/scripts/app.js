'use strict';

var verdantApp = angular.module('verdantApp', [
	'ngRoute',
	'ngAnimate',
	'ui.mask',
	'ui.bootstrap',
	'toaster',
	//'verdantApp.directives',
	//'verdantApp.filters',
	'verdantApp.services'
]);

verdantApp.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'app/scripts/views/home.html',
		controller: 'home'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});

});

verdantApp.run(['ParseSDK', 'location', function(services, $location) {

	// getconfig

	// validate login

}]);