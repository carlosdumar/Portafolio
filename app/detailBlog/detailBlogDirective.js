(function() {

	angular.module('detailBlog.directives', [])
		.directive('blogComments', ['detailBlogService', '$routeParams', function (detailBlogService, $routeParams) {
			return {
				restrict: 'E',
				templateUrl: 'app/shared/blog-comments.html',
				controller: function($scope)  {
					
					var titlePage = $routeParams.name;

					$scope.addComment = function() {
						
						var tiempo = moment().format('MMMM Do YYYY, h:mm:ss a');
						var dt = Date();

						$scope.comment.date = tiempo;
						detailBlogService.saveComment($scope.comment, titlePage);						
						$scope.comment = {};
					}
					

					var myRootRef = new Firebase('https://portfoliocarlos.firebaseio.com/');

					myRootRef.on('value', function (snapshot) {
						var dataFB = snapshot.val();
						var $commentsList = $('#commentsList');
						_.each(dataFB["comments"][titlePage], function(v, i) {
							$commentsList.prepend(
								'<div class="comment">' +
									'<h4 class="commentsbyuser">' + v.body + '</h4>' +
									'- Comentario hecho por <a href="' + v.email + '" class="usercomments">' +v.email + '</a>' +
									'<span >' + ', ' + v.date + '</span>' +
								'</div>'
								);
						})
					});
				}
			};
		}]);
})();