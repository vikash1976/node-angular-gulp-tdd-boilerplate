var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', ['$scope', 'DataService', function($scope, dataService){
	$scope.message = "All at 1 place, thats great!!";
	$scope.password = 'ilove11212';
	$scope.strength = '';
	
	$scope.getData = function(){
		dataService.getData().then(function(data){
			console.log(data.status === 200 ? 'Success' : 'Failed');
			$scope.prices = data.data;
			console.log($scope.prices);
		},
		function(err){
			
			console.log(err.status);
		});
	};
	
	$scope.passwordGrade = function(){
		$scope.strength = dataService.gradePassword($scope.password);
		//$scope.password.length > 8 ? 'strong' : 'weak';
		//dataService.gradePassword($scope.password);
		
		console.log('Password strenth is: '+$scope.strength);
	};
}]);