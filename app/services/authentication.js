galleryApp.factory('Authentication', 
    function($firebase, $firebaseAuth, $location, FIREBASE_URL, $routeParams){

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);
    var isAdmin = false;

    var myObject = {


        // isAdmin: function(){
        //     var isAdmin = false;
        //     auth.$waitForAuth(function(authData){
        //         }).then(function(authData){
        //          console.log("Getting role for user " + authData.uid);
        //             if(authData !==null){
        //              var userDataRef = new Firebase(FIREBASE_URL + '/users');
        //              var qry = userDataRef.orderByChild("email").equalTo(authData.email);
        //                 var works = $firebaseArray(qry);                    
        //                 if(works !==null){
        //                     if(works[0].role = "Admin"){
        //                      isAdmin = true;
        //                         console.log("User role for user " + authData.email + " is " + isAdmin);
        //                     }
        //                 }
        //             }
        //             return isAdmin;
        //         });
        //     });
        // },
        login: function(user){
            return auth.$authWithPassword({
                email: user.email,
                password: user.password
            });
        },  
        logout: function(user){
            auth.$unauth();
            $location.path("/home");
            window.location.reload();
        },  
        register: function(user){
            var roleString = "";
            if (user.email == "wendykambestad@gmail.com") {
                roleString = 'Admin'
            } else {
                roleString = 'User'
            }   
            return auth.$createUser({
                email: user.email,
                password: user.password
            }).then(function(authData){
                console.log("User " + authData.uid + " created ok ");
                var ref2 = new Firebase(FIREBASE_URL);
                var postRef2 = ref2.child('users').child(authData.uid);
                postRef2.set({
                    date: Firebase.ServerValue.TIMESTAMP,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    password: user.password,
                    role: roleString
                });
            });
        }
        // auth: function(user){
        //     return auth;
        // },

        // isAdmin: function(user){
        //     return user.role == "Admin";
        // }

    };

    return myObject;

}); 
