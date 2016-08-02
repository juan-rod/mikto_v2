app.directive("reportingDiv", function() {
	return{
		restrict: 'E',
		templateUrl: "./data/partials/p_card-content/reporting.html",
		replace: true,
		controller: 'mainCtrl'

	};
});

