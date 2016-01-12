'use strict';

angular.module('verdantApp')

.controller('HomeController', ['$scope', function($scope) {

	// login page actions

	// track login
	var dimensions = {
  		date: new Date().toString(),
  		type: 'web'
	};
	
	Parse.Analytics.track('login', dimensions);

}]);