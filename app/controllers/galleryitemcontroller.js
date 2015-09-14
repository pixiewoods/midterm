galleryApp.controller('galleryItemController', 
    function($scope, $routeParams, FIREBASE_URL, $firebaseArray, $firebase, $firebaseAuth, $firebaseObject ) {

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

        console.log("Passed item id is: " + $routeParams.item_id);
        $scope.item_id = $routeParams.item_id;
        $scope.item_error_text = "";
        var works = [];

        var ref = new Firebase(FIREBASE_URL);
        var postRef = ref.child('galleryItems');
        var qry = postRef.orderByKey().equalTo($scope.item_id);
        var works = $firebaseArray(qry);

        $scope.galleryItems = works;

        $scope.goBack = function() {
            window.history.back();
        }

        $scope.buyWork = function( item_key) {
            var itemKey = item_key;
            console.log("Buy item " + itemKey);
        }

    });