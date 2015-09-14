galleryApp.controller('galleryLoginController', 
    function($scope, $location, FIREBASE_URL, $firebaseAuth, Authentication ){

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
    
    $scope.login = function() {
        Authentication.login($scope.user)
        .then(function(user){
            $location.path("/home");
        }).catch(function(error){
            $scope.message = error.message;
        });
 	} 

    $scope.register = function() {
        Authentication.register($scope.user)
        .then(function(user){
            Authentication.login($scope.user);
            $location.path("/login");
        }).catch(function(error){
            $scope.message = error.message;
        });
 	} 

    $scope.logout = function() {
        Authentication.logout($scope.user);
        $location.path("/home");
    } 

    $scope.goBack = function() {
        window.history.back();
    }

});