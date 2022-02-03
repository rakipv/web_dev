// Create AngularJS application
var app = angular.module('demoLearningTurn',[]);

// Create Controller with name mainCtrl
app.controller('mainCtrl', function($scope,$http){

	
    $scope.rowlimit=4;
    $scope.fullName ;
    $scope.today = new Date();
	// Employees record List
	// $scope.employees = [
	// 	  {
	// 	    "age": 40,
	// 	    "full_name": "Page Cabrera",
	// 	    "gender": "male",
	// 	    "company": "IMKAN",
	// 	    "email": "pagecabrera@imkan.com",
	// 	    "phone": "+91 8618897671",
    //         "designation":"secretary",
	// 	    "salary": "4227",
    //         "dob":"16/12/1999"
	// 	  },
	// 	  {
	// 	    "age": 21,
	// 	    "full_name": "Macdonald Rosales",
	// 	    "gender": "male",
	// 	    "company": "AFFLUEX",
	// 	    "email": "macdonaldrosales@affluex.com",
	// 	    "phone": "+91 7531548920",
    //         "designation":"gen secretary",
	// 	    "salary": "8878",
    //         "dob":"15/1/1998"
	// 	  },
	// 	  {
	// 	    "age": 31,
	// 	    "full_name": "Cash Marsh",
	// 	    "gender": "male",
	// 	    "company": "REMOLD",
	// 	    "email": "cashmarsh@remold.com",
	// 	    "phone": "+91 8541026973",
    //         "designation":"manager",
	// 	    "salary": "9686",
    //         "dob":"21/12/1980"
	// 	  },
	// 	  {
	// 	    "age": 39,
	// 	    "full_name": "Ofelia Cooley",
	// 	    "gender": "female",
	// 	    "company": "GEEKETRON",
	// 	    "email": "ofeliacooley@geeketron.com",
	// 	    "phone": "+91 9574100863",
    //         "designation":"general manager",
	// 	    "salary": "9321",
    //         "dob":"05/05/1985"
	// 	  },
	// 	  {
	// 	    "age": 21,
	// 	    "full_name": "Erma Chase",
	// 	    "gender": "female",
	// 	    "company": "MEGALL",
	// 	    "email": "ermachase@megall.com",
	// 	    "phone": "+91 8845963110",
    //         "designation":"HR MANAGER",
	// 	    "salary": "8145",
    //         "dob":"16/11/2000"
	// 	  },
	// 	  {
	// 	    "age": 33,
	// 	    "full_name": "Maryanne Mullins",
	// 	    "gender": "female",
	// 	    "company": "OLUCORE",
	// 	    "email": "maryannemullins@olucore.com",
	// 	    "phone": "+91 9988741250",
    //         "designation":"ACCOUNT manager",
	// 	    "salary": "9564",
    //         "dob": "16/12/1999"
	// 	  },
	// 	  {
	// 	    "age": 21,
	// 	    "full_name": "Christina Dickerson",
	// 	    "gender": "female",
	// 	    "company": "HALAP",
	// 	    "email": "christinadickerson@halap.com",
	// 	    "phone": "+91 8541203997",
    //         "designation":"ChIEF EXEVUTIVE",
	// 	    "salary": "7966",
    //         "dob":"15/05/1997"
	// 	  }
	// 	];

	
    $http.get('https://pvr001.github.io/EMPLOYEE--MANAGAMENT/employee.json')
    .success(function(response)
    {
        $scope.names=response.employees;

    });
        
	
});





