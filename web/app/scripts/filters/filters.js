'use strict';

angular.module('verdantApp.filters', [])

.filter('unique', function() {
	return function(collection, key) {
		var keys = [];

		angular.forEach(collection, function(item) {
			if (keys.indexOf(item[key]) === -1) {
				keys.push(item[key]);
			}
		});
		return keys;
	};
});