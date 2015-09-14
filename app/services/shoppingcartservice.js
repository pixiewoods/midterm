galleryApp.factory('ShoppingCartService', 
	['$firebase', '$location', 'FIREBASE_URL', '$routeParams', 
    function($firebase, $location, FIREBASE_URL, $routeParams){

    var ref = new Firebase(FIREBASE_URL);
    var isAdmin = false;

		var myObject = {

			addToCart: function() {
				console.log("In shoppingcartservice ");
				return true;
			}
		};

		return myObject;
		
	}]);