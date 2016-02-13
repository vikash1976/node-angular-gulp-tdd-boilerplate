describe("DataService", function(){

        var $httpBackend;
        var dataService;
        var baseURL = "http://localhost:1337/";

        beforeEach(angular.mock.module('myApp'));

        beforeEach(function(){
            inject(function (_$httpBackend_, DataService) {
                $httpBackend = _$httpBackend_;
                dataService = DataService;
            });
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("should initialize correctly", function(){
            expect(dataService).toBeDefined();
        });

        it("should load prices", function(){
            $httpBackend.expectGET(baseURL + "prices").respond([
               {
                tick: 'RIL', price: 1002
                },
                {
                tick: 'TCS', price: 2002
                }
                ,{
                tick: 'INF', price: 1270
                },
                {
                tick: 'ICI', price: 267
                }
               ]);

            var prices = dataService.getData(function(){
                expect(prices).toBeDefined();
            });
            $httpBackend.flush();
        });
    });