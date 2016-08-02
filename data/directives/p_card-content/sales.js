app.directive("salesDiv", function() {
	return{
		restrict: 'E',
		templateUrl: "./data/partials/p_card-content/sales.html",
		replace: true,
		controller: 'mainCtrl'

	};
});

