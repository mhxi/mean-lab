// SERVICES.JS

'user strict';

angular.module('meanApp.services', [])
	.factory('Post', function ($window, $resource) {
		return $resource($window.location.origin + '/posts/:id', { id: '@id' }, { 
			update: {method: 'PUT'} 
		});
	});