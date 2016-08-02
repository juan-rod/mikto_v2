app.directive("departmentsDiv", function() {
	return{
		restrict: 'E',
		templateUrl: "./data/partials/p_card-content/departments.html",
		replace: true,
		controller: 'mainCtrl'

	};
});

