// CONTROLLERS.JS

'user strict';

angular.module('meanApp.controllers', [])
	.controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    	// INITIALIZATION AND NAVBAR LOGIC
	}])

	// POSTS
	.controller('PostsIndexCtrl', ['Posts', '$scope', '$location', '$http', function (Post, $scope, $location, $http) {
		// GET POSTS
		$scope.posts = Post.query();

		// CREATE POST
		$scope.createPost = function() {
			var post = new Post($scope.post);
			post.$save(function (data) {
				$scope.posts.unshift(data);
				$scope.post = {};
			});
		};

		// DELETE POST
		$scope.deletePost = function() {
			Post.remove({ id: post._id }, function (data) {
				$scope.posts.splice(index, 1);
			});
		};

	}]);