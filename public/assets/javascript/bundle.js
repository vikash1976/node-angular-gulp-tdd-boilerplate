/* This file is generated — do not edit by hand! */
var myApp=angular.module("myApp",[]);myApp.controller("myCtrl",["$scope","DataService",function(t,e){t.message="All at 1 place, thats great!!",t.password="ilove11212",t.strength="",t.getData=function(){e.getData().then(function(e){console.log(200===e.status?"Success":"Failed"),t.prices=e.data,console.log(t.prices)},function(t){console.log(t.status)})},t.passwordGrade=function(){t.strength=e.gradePassword(t.password),console.log("Password strenth is: "+t.strength)}}]),myApp.factory("DataService",["$http",function(t){var e={};return e.getData=function(){return t.get("http://localhost:1337/prices")},e.gradePassword=function(t){return t.length>8?"strong":"weak"},e}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiLCJzZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJteUFwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiZGF0YVNlcnZpY2UiLCJtZXNzYWdlIiwicGFzc3dvcmQiLCJzdHJlbmd0aCIsImdldERhdGEiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJwcmljZXMiLCJlcnIiLCJwYXNzd29yZEdyYWRlIiwiZ3JhZGVQYXNzd29yZCIsImZhY3RvcnkiLCIkaHR0cCIsIkRhdGFTZXJ2aWNlIiwiZ2V0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQSxHQUFBQSxPQUFBQyxRQUFBQyxPQUFBLFdBRUFGLE9BQUFHLFdBQUEsVUFBQSxTQUFBLGNBQUEsU0FBQUMsRUFBQUMsR0FDQUQsRUFBQUUsUUFBQSxnQ0FDQUYsRUFBQUcsU0FBQSxhQUNBSCxFQUFBSSxTQUFBLEdBRUFKLEVBQUFLLFFBQUEsV0FDQUosRUFBQUksVUFBQUMsS0FBQSxTQUFBQyxHQUNBQyxRQUFBQyxJQUFBLE1BQUFGLEVBQUFHLE9BQUEsVUFBQSxVQUNBVixFQUFBVyxPQUFBSixFQUFBQSxLQUNBQyxRQUFBQyxJQUFBVCxFQUFBVyxTQUVBLFNBQUFDLEdBRUFKLFFBQUFDLElBQUFHLEVBQUFGLFdBSUFWLEVBQUFhLGNBQUEsV0FDQWIsRUFBQUksU0FBQUgsRUFBQWEsY0FBQWQsRUFBQUcsVUFJQUssUUFBQUMsSUFBQSx3QkFBQVQsRUFBQUksY0N4QkFSLE1BQUFtQixRQUFBLGVBQUEsUUFBQSxTQUFBQyxHQUNBLEdBQUFDLEtBU0EsT0FSQUEsR0FBQVosUUFBQSxXQUNBLE1BQUFXLEdBQUFFLElBQUEsaUNBR0FELEVBQUFILGNBQUEsU0FBQVgsR0FDQSxNQUFBQSxHQUFBZ0IsT0FBQSxFQUFBLFNBQUEsUUFHQUYiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15QXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgW10pO1xyXG5cclxubXlBcHAuY29udHJvbGxlcignbXlDdHJsJywgWyckc2NvcGUnLCAnRGF0YVNlcnZpY2UnLCBmdW5jdGlvbigkc2NvcGUsIGRhdGFTZXJ2aWNlKXtcclxuXHQkc2NvcGUubWVzc2FnZSA9IFwiQWxsIGF0IDEgcGxhY2UsIHRoYXRzIGdyZWF0ISFcIjtcclxuXHQkc2NvcGUucGFzc3dvcmQgPSAnaWxvdmUxMTIxMic7XHJcblx0JHNjb3BlLnN0cmVuZ3RoID0gJyc7XHJcblx0XHJcblx0JHNjb3BlLmdldERhdGEgPSBmdW5jdGlvbigpe1xyXG5cdFx0ZGF0YVNlcnZpY2UuZ2V0RGF0YSgpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEuc3RhdHVzID09PSAyMDAgPyAnU3VjY2VzcycgOiAnRmFpbGVkJyk7XHJcblx0XHRcdCRzY29wZS5wcmljZXMgPSBkYXRhLmRhdGE7XHJcblx0XHRcdGNvbnNvbGUubG9nKCRzY29wZS5wcmljZXMpO1xyXG5cdFx0fSxcclxuXHRcdGZ1bmN0aW9uKGVycil7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIuc3RhdHVzKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0XHJcblx0JHNjb3BlLnBhc3N3b3JkR3JhZGUgPSBmdW5jdGlvbigpe1xyXG5cdFx0JHNjb3BlLnN0cmVuZ3RoID0gZGF0YVNlcnZpY2UuZ3JhZGVQYXNzd29yZCgkc2NvcGUucGFzc3dvcmQpO1xyXG5cdFx0Ly8kc2NvcGUucGFzc3dvcmQubGVuZ3RoID4gOCA/ICdzdHJvbmcnIDogJ3dlYWsnO1xyXG5cdFx0Ly9kYXRhU2VydmljZS5ncmFkZVBhc3N3b3JkKCRzY29wZS5wYXNzd29yZCk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKCdQYXNzd29yZCBzdHJlbnRoIGlzOiAnKyRzY29wZS5zdHJlbmd0aCk7XHJcblx0fTtcclxufV0pOyIsIm15QXBwLmZhY3RvcnkoJ0RhdGFTZXJ2aWNlJywgWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKXtcclxuXHR2YXIgRGF0YVNlcnZpY2UgPSB7fTtcclxuXHREYXRhU2VydmljZS5nZXREYXRhID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wcmljZXMnKTtcclxuXHR9O1xyXG5cdFxyXG5cdERhdGFTZXJ2aWNlLmdyYWRlUGFzc3dvcmQgPSBmdW5jdGlvbihwYXNzd29yZCl7XHJcblx0XHRyZXR1cm4gcGFzc3dvcmQubGVuZ3RoID4gOCA/ICdzdHJvbmcnIDogJ3dlYWsnO1xyXG5cdH07XHJcblx0XHJcblx0cmV0dXJuIERhdGFTZXJ2aWNlO1xyXG59XSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
