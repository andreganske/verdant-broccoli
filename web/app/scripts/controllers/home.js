'use strict';

angular.module('verdantApp')

.controller('home', ['$scope', function($scope) {

	// login page actions

	// track login
	var dimensions = {
  		date: new Date(),
  		type: 'web'
	};
	
	Parse.Analytics.track('login', dimensions);

}]);