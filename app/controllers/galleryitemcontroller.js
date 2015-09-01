galleryApp.controller('galleryItemController', 
    function($scope, $routeParams, FIREBASE_URL, $firebaseArray, $firebaseObject ) {

        console.log("Passed item id is: " + $routeParams.item_id);
        $scope.item_id = $routeParams.item_id;
        $scope.item_error_text = "";
        $scope.galleryItems = [];

        var ref = new Firebase(FIREBASE_URL);
        var postRef = ref.child('galleryItems');
        var sync = $firebase(ref).$asArray;

        postRef.orderByChild("id").equalTo($scope.item_id).once("value", function(querySnapshot) {
            if (querySnapshot.numChildren() > 0) {
                querySnapshot.forEach(function(itemSnapshot) {
                    console.log("Query found passed item:  " + itemSnapshot.key());
                    console.log("                          " + itemSnapshot.val());
                    $scope.galleryItems = itemSnapshot.val();
                    console.log("Item array is: " + $scope.galleryItems);
                    return true;
                });
            } else {
            console.log("Item data could not be found for: " + $scope.item_id);
            $scope.item_error_text = "Sorry.  Gallery item could not be found.";
            }
        });

        //$scope.galleryItems = $firebaseArray(postRef);

    // console.log("FB result is: " + postRef.key());

    // postRef.on("value", function(snapshot) {
    //     console.log(snapshot.val());
    // }, function (errorObject) {
    //     console.log("The read failed: " + errorObject.code);
    // });

    //console.log($scope.galleryItems);

    // if ($scope.itemsArray[$scope.item_id]) {
    //     $scope.workArray = $scope.itemsArray[$scope.item_id];
    // } else {
    //     $scope.item_error_text = "Sorry.  Cannot find that gallery item right now.";
    // };


    /*  Set item availability here.  May not be determined just by SOLD but other rules, too. */

 //    if (typeof $scope.galleryItems === 'undefined') {  
 // //   if (typeof $scope.galleryItems === 'undefined' || $scope.galleryItems.length === 0) {  
 //        console.log("No data retrieved from FB "); 
 //    }  else if ($scope.galleryItems.sold == "FALSE") {
 //        $scope.item_for_sale = "YES"; 
 //    };

    $scope.item_for_sale = "YES";



    $scope.goBack = function() {
        window.history.back();
    };


});