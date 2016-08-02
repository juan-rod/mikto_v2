app.controller("mainCtrl", 
  ["$scope",
  function($scope, $location) {
  		var allElements = document.getElementsByTagName("*");
		var allIds = [];

		function findIds(){
			for (var i = 0, n = allElements.length; i < n; ++i) {
			  var el = allElements[i];
			  if (el.id) { allIds.push(el.id); }
			}
		}
		function pNavLocation(id,location){
			var currentNav =angular.element(document.querySelector('#p_nav-'+id)),
				locationOfNext = allIds[location +1],
				nextNav = angular.element(document.querySelector('#p_nav-'+locationOfNext));
				// console.log('currentNav:',currentNav);
				// console.log('nextNav:',nextNav);
				// console.log('locationOfNext:',locationOfNext);
			currentNav.removeClass('currentNav');
			nextNav.addClass('currentNav');
		}
  	$scope.showNext = function(event){
  		findIds();
  		console.log("allIds:",allIds);
		var currentCardId = event.target.parentNode.parentNode.parentNode.parentNode.id,
			indexOfCurrentCardId = allIds.indexOf(currentCardId),
			currentCard = angular.element(document.querySelector('#'+currentCardId)),
			nextCard = angular.element(document.querySelector('#'+allIds[indexOfCurrentCardId +1]));
			console.log("card == 4:",indexOfCurrentCardId);
		if(indexOfCurrentCardId === 9){
			console.log("card == 4:",indexOfCurrentCardId);
			nextCard = angular.element(document.querySelector('#'+allIds[indexOfCurrentCardId - indexOfCurrentCardId]));
			console.log('nextCard:',nextCard);
			currentCard.removeClass('current');
			nextCard.addClass('current');
		}else{
			pNavLocation(currentCardId, indexOfCurrentCardId);
			currentCard.removeClass('current');
			nextCard.addClass('current');	
		}
		allIds =[];
  	};	
  

  	$scope.showPrev = function(event){
  		findIds();
		var currentCardId = event.target.parentNode.parentNode.parentNode.parentNode.id,
			indexOfCurrentCardId = allIds.indexOf(currentCardId),
			currentCard = angular.element(document.querySelector('#'+currentCardId)),
			prevCard = angular.element(document.querySelector('#'+allIds[indexOfCurrentCardId -1]));
		if(indexOfCurrentCardId === 0){
			prevCard = angular.element(document.querySelector('#'+allIds[indexOfCurrentCardId + (allIds.length-1)]));
			console.log("prevCard",prevCard);
			currentCard.removeClass('current');
			prevCard.addClass('current');
		}else{
			currentCard.removeClass('current');
			prevCard.addClass('current');	
		}

	
		allIds =[];
  	};

  } ]);