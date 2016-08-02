app.directive("productNav", function() {
	return{
		restrict: 'E',
		templateUrl: "./data/partials/p_card-content/p_Nav.html",
		replace: true,
		controller: 'mainCtrl'

	};
});
