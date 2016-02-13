describe('myCtrl', function() {
  beforeEach(angular.mock.module('myApp')); // this is the crux of 2 hrs of frustration

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('passwordGrade', function() {
    var $scope, controller;
    beforeEach(function(){
      $scope = {};
      controller = $controller('myCtrl', { $scope: $scope });
    });
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      
      $scope.password = 'longerthan8chars';
      $scope.passwordGrade();
      expect($scope.strength).toEqual('strong');
    });
    
    it('sets the strength to "weak" if the password length is <8 chars', function() {
      
      $scope.password = 'lions';
      $scope.passwordGrade();
      expect($scope.strength).toEqual('weak');
    });
  });
});