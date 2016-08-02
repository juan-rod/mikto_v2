app.directive("cashiersDiv", function() {
	return{
		restrict: 'E',
		templateUrl: "./data/partials/p_card-content/cashiers.html",
		replace: true,
		controller: 'mainCtrl'

	};
});
