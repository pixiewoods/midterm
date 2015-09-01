galleryApp.service('Common', function(
    $firebase, FIREBASE_URL ) {

    var self = this;
    var self.userEmail = '';
    var self.userFirstName = '';
    var self.userLastName = '';
    var self.userRole = '';

    return {
        getUserEmail: function() {
            return self.userEmail;
        },
        getFirstName: function() {
            return self.userFirstName;
        },        
        getUserLastName: function() {
            return self.userLastName;
        },
        getUserRole: function() {
            return self.userRole;
        },        
        setUserEmail: function(value) {
            self.userEmail = value;
        },
        setUserFirstName: function(value) {
            self.userFirstName = value;
        },
        setUserLastName: function(value) {
            self.userLastName = value;
        },   
        setUserRole: function(value) {
            self.userRole = value;
        }                
    };
});
