galleryApp.controller('galleryMenuController', 
    function($scope, $location, FIREBASE_URL, $firebaseAuth, Authentication ){

    //var ref = new Firebase(FIREBASE_URL);
    //var auth = $firebaseAuth(ref);

    // $scope.isAdmin = function() {
    //     $scope.isAdmin = Authentication.isAdmin();

    // }  

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


});