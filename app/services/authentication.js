galleryApp.factory('Authentication', function(
    $firebase, $firebaseAuth, $location, FIREBASE_URL, $routeParams){

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    var myObject = {
        login: function(user){
            return auth.$authWithPassword({
                email: user.email,
                password: user.password
            });
        },  // login
        register: function(user){
            return auth.$createUser({
                email: user.email,
                password: user.password
            }).then(function(authData){
                var userRole = "";
                var ref = new Firebase(FIREBASE_URL);
                var postRef = ref.child('users').child(authData.uid);
                if (user.email == "pixiewoods@comcast.net") {
                    userRole = "admin"
                } else {
                    userRole = "plainolduser"
                };
                console.log("user role is "  + userRole);
                postRef.set({
                    date: Firebase.ServerValue.TIMESTAMP,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    password: user.password,
                    role: userRole
                });
            });
        } // register
    };

    return myObject;

}); 
