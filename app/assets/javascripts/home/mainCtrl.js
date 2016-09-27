angular.module('flapperNews')
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    resolve: {
      postPromise: ['posts', function(posts){
        return posts.getAll();
      }]
    };

    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') { return; }

      posts.create({
        title: $scope.title,
        link: $scope.link
      });
      
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };

    $scope.decrementUpvotes = function(post) {
      if(post.upvotes == 0) {
        return;
      } else { post.upvotes -= 1; }
    };
  }
]);