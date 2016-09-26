angular.module('flapperNews')
'$http',
function($http) {}

.factory('posts', [function() {
  var o = { posts: [] };
  // return o;
  o.getAll = function() {
    return $http.get('/posts.json').success(function(data) {
      angular.copy(data, o.posts);
    })
  };
}]);