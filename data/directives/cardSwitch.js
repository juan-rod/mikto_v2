app.directive("cardSwitch",cardSwitch);

function cardSwitch($timeout,$window){
console.log("hello from cardSwitch");
	function cardSwitchCtrl($scope){
		//something here maybe?
		$scope.showNext = function(){
			console.log("hello from showNext");
			var elementId = $attr.id;
			console.log("elementId:",elementId);
		};
	}

	function link($scope,$element,$attr,$ctrl){

			// $timeout(function (){
			// 	$scope.$apply();
			// },10);
		// 	function locateSpecificElement(){
			
		// 		var pageLinks = document.getElementById('cashiers');
		// 		var pageLinksTopPosition = pageLinks.getBoundingClientRect().top;
		// 		var getPageLinks = angular.element(document.querySelector('#pageLinks'));
		// 		var logo = angular.element(document.querySelector('#cd-logo'));
		// 		// console.log("screen width:", this.innerWidth);
		// 		if(this.scrollY >= 600 && this.innerWidth > 480){
		// 			getPageLinks.addClass('is-fixed');
		// 			setTimeout(function(){
		// 				getPageLinks.addClass('animate-children');
		// 				logo.addClass('slide-in');
		// 			},50);
		// 		} else {
		// 			getPageLinks.removeClass('is-fixed');
		// 			setTimeout(function(){
		// 				getPageLinks.removeClass('animate-children');
		// 				logo.removeClass('slide-in');
		// 			},50);
		// 		}
		// 	 	$scope.$apply();
		// 	}
		

		// angular.element(window).bind('scroll', locateSpecificElement);
	}
	return{
		restrict: 'A',
		scope: {},
		controllerAs:'vm',
		controller:cardSwitchCtrl,
		link: link
	};
}