app.directive("comparisonDiv", function() {
	return{
		restrict: 'E',
		templateUrl: "./data/partials/p_card-content/comparison.html",
		replace: true,
		controller: 'mainCtrl'

	};
});

