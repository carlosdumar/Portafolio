(function() {

	angular.module('detailBlog.services', [])
		.factory('detailBlogService', ['$http', '$q', function ($http, $q) {

			var myRootRef = new Firebase('https://portfoliocarlos.firebaseio.com/');

			function saveComment(comment, titlePage) {
				myRootRef.child("comments").child(titlePage).push(comment);
			}

			
			function getComments() {
				var dataFB = {};
				var comments = [];

				var myRootRef2 = new Firebase('https://portfoliocarlos.firebaseio.com/comments');

				myRootRef.on('value', function (snapshot) {
					comments = snapshot.val();
					return comments;		

				}, function (errorObject) {
					console.log("The read failed: " + errorObject.code);
				});

				return comments;			
			}
			return {
				getComments: getComments,
				saveComment: saveComment				
			}
		}])
})();