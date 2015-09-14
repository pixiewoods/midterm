galleryApp.controller('galleryWorksController', 
    function( $scope, $firebaseArray, FIREBASE_URL, $firebaseAuth, MediumService ){

    $scope.mediumlist = MediumService.list();

    var refUser = new Firebase(FIREBASE_URL);
    var authUser = $firebaseAuth(refUser);

    authUser.$onAuth(function(authData){
        if(authData !==null){
            var userDataRef = new Firebase(FIREBASE_URL + '/users');
            userDataRef.orderByChild("email").equalTo(authData.password.email)
                .on("child_added", function(snapshot){
                    $scope.lastname = snapshot.val().lastname;                    
                    $scope.firstname = snapshot.val().firstname;
                    $scope.role = snapshot.val().role;
                    $scope.email = snapshot.val().email;
                    $scope.$apply();
            });
        }
    });

	$scope.galleryItems= [];

	var ref = new Firebase(FIREBASE_URL);
  	var postRef = ref.child('galleryItems');
  	$scope.galleryItems = $firebaseArray(postRef);
    
});