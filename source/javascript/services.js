myApp.factory('DataService', ['$http', function($http){
	var DataService = {};
	DataService.getData = function(){
		return $http.get('http://localhost:1337/prices');
	};
	
	DataService.gradePassword = function(password){
		return password.length > 8 ? 'strong' : 'weak';
	};
	
	return DataService;
}]);