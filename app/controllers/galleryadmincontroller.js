galleryApp.controller('galleryAdminController', function( $scope, $firebaseArray, FIREBASE_URL) {

//  This controller is for admin functions.  View All Works.  Add New Items.
    $scope.adding_galleryitem = {};
    $scope.galleryItems= [];

    var ref = new Firebase(FIREBASE_URL);
    var postRef = ref.child('galleryItems');
    $scope.galleryItems = $firebaseArray(postRef);

    var imageUpped;

    $scope.mediumlist = [
    { medium: 'Oil'},
    { medium: 'Acrylic'},
    { medium: 'Watercolor'},
    { medium: 'Pencil'},
    { medium: 'Charcoal'},
    { medium: 'Pastel'},
    { medium: 'Sculpture'}
    ];

    $scope.add_galleryitem_error = "";
    $scope.add_galleryitem_newID = "";

    $scope.addImage = function( new_image ){
      filepicker.setKey("AU5HVDKxsQYewUzKMZVmTz");

      filepicker.pick(
      {
        mimetype: 'image/*',
        container: 'window',
        services: ['COMPUTER']
      },
      function(Blob){
        console.log(JSON.stringify(Blob));
        imageUpped = Blob.url;
      },
      function(FPerror){
        console.log(FPerror.toString());
      }
    )};

    $scope.addGalleryItem = function( new_galleryitem ){
    
    // if new_galleryitem is not defined
    if (typeof(new_galleryitem) === 'undefined') {
        // then add an error message to $scope and exit
        $scope.add_galleryitem_error = "The form is not properly filled out";
        return false;
    }

    if (!new_galleryitem.title) 
    {
        $scope.add_galleryitem_error = "Missing title";
    }
    else if (!new_galleryitem.date_completed || new_galleryitem.date_completed.length <10 )
    {
        $scope.add_galleryitem_error = "You must provide a date in format yyyy-mm-dd";
    }
    else if (!new_galleryitem.medium)
    {
        $scope.add_galleryitem_error = "Missing medium";
    }
    else if (!new_galleryitem.dimensions) 
    {
        $scope.add_galleryitem_error = "Missing dimensions";
    }
    else if (!new_galleryitem.sold)
    {
        $scope.add_galleryitem_error = "Missing sold indicator";
    }
    else if (!new_galleryitem.price)
    {
        $scope.add_galleryitem_error = "Missing price";
    }
    else if (!new_galleryitem.description)
    {
        $scope.add_galleryitem_error = "Missing description";
    }
    // else if (!new_galleryitem.imageurl)
    // {
    //     $scope.add_galleryitem_error = "Missing image URL";
    // }
    else {

        //  Must find current max item ID and increment value to create unique ID for this item

        $scope.add_galleryitem_newID = "";
        $scope.add_galleryitem_newID = getNewID();
        
        var pushRef = new Firebase(FIREBASE_URL + '/galleryItems');
        pushRef.push({

            id: $scope.add_galleryitem_newID,
            title: new_galleryitem.title,
            date_completed: new_galleryitem.date_completed,
            medium: new_galleryitem.medium,
            dimensions: new_galleryitem.dimensions,
            sold: new_galleryitem.sold,
            price: new_galleryitem.price,
            description: new_galleryitem.description,
            imageurl: imageUpped
        });

        $scope.adding_galleryitem = {};
        $scope.add_galleryitem = {};
        $scope.add_galleryitem_error = "";
        };
    };

    function getNewID () {
        var nextID = null;
        var maxID = null;
        //console.log("gallery item array length is " + $scope.galleryItems.length);

        for (var i = 0; i < $scope.galleryItems.length; i++) {
            var item = $scope.galleryItems[i];
            //console.log("current record is " + item);
            //console.log("maxID is " + maxID);
            if (maxID == null || Number(item.id) > maxID) {
                //console.log("current item id is " +item.id);
                maxID = Number(item.id);
                //console.log("new maxID is " + maxID);
            }
        }
        //console.log("last current record is " + item);
        nextID = pad((Number(maxID)+1), 4);
        //console.log("nextID is " + nextID);

        return nextID;
    };  

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    };

});