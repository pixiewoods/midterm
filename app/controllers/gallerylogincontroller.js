galleryApp.controller('galleryLoginController', 
    function($scope, $location, FIREBASE_URL, $firebaseAuth, Authentication, Common ){

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);
    
    $scope.login = function() {
        Authentication.login($scope.user)
        .then(function(user){
            $location.path("/home");
        }).catch(function(error){
            $scope.login_error_text = error.message;
        });
 	} //login

    $scope.register = function() {
        Authentication.register($scope.user)
        .then(function(user){
            Authentication.login($scope.user);
            $location.path("/login");
        }).catch(function(error){
            $scope.register_error_text = error.message;
        });
 	} //register

});