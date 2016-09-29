angular.module('flapperNews')
.factory('posts', ['$http', function($http) {
  var o = { posts: [] };

  o.getAll = function() {
    return $http.get('/posts.json').success(function(data) {
      angular.copy(data, o.posts);
    })
  };

  o.create = function(post) {
    return $http.post('/posts.json', post).success(function(data) {
      o.posts.push(data);
    });
  };

  o.upvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json')
           .success(function(data){
             post.upvotes += 1;
           });
  };

  o.downvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json')
            .success(function(data) {
              if(post.upvotes == 0) {
                return;
              } else {
                post.upvotes -= 1;
              }
            });
  };

  o.get = function(id) {
    return $http.get('/posts' + post.id + '.json').then(function(result) {
      return result.data;
    });
  };
  return o;
}]);
