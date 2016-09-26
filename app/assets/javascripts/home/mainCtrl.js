angular.module('flapperNews')
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if(!$scope.name || $scope.name === '') { return; }
      
      $scope.posts.push({
        name: $scope.name,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      
      $scope.name = '';
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
])