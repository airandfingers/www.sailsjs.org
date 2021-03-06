angular.module('Sails').factory('getRepoCommits', ['$http', function ($http) {

  return {

    inputs: {
      repo: { example: 'sails' },
      user: { example: 'balderdashy' }
    },

    fn: function (opts) {
      return $http.get('/news', { params: opts }).then(function (res) {
        var mostRecentActivity = res.data[0];
        return {
          latestCommit: angular.extend(mostRecentActivity, {
            date: moment(mostRecentActivity.commit.author.date).fromNow()
          })
        };
      });
    }
  };

}]);
