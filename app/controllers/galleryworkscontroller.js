galleryApp.controller('galleryWorksController', function( $scope, $firebaseArray, FIREBASE_URL){

	$scope.galleryItems= [];

	var ref = new Firebase(FIREBASE_URL);
  	var postRef = ref.child('galleryItems');
  	$scope.galleryItems = $firebaseArray(postRef);
    
});