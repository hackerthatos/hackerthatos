projectPresenter.controller('ProjectPresentationController', function($scope, $http) {
    self = $scope;

    $http.get('/json_projects').success(function(data) {
      self.products = data;
    });
});