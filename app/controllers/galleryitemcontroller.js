galleryApp.controller('GalleryItemController', function($scope, $routeParams ){

    $scope.item_id = $routeParams.item_id;
    $scope.item_error_text = "";

    var galleryItems = {

    "0001": [{ medium: "Acrylic Paint", dimensions: "9 x 11", sold: "FALSE", price: "950.00", title: "Drink", date_completed: '2015-04-01', description: "Study in color and exploration of Op art. Undergraduate RISD student assignment.", imageurl: 'scott_d.png' }] ,
    "0002": [{ medium: "Acrylic Paint", dimensions: "9 x 11", sold: "FALSE", price: "850.00", title: "Around the Corner", date_completed: '2015-04-15', description: "Study in color and exploration of Op art. Undergraduate RISD student assignment.", imageurl: 'around_the_corner.png' }] ,   
    "0003": [{ medium: "Oil", dimensions: "8 X 11", sold: "FALSE", price: "250.00", title: "Hope Gangloff Master Copy", date_completed: '2015-02-01', description: "Master copy.  Undergraduate RISD student assignment.", imageurl: 'hope_gangloff_knockoff.png' }] ,  
    "0004": [{ medium: "Oil", dimensions: "45 x 20", sold: "FALSE", price: "1050.00", title: "Rachel", date_completed: '2015-02-01', description: "This oil painting was completed for undergraduate student assignment.", imageurl: 'rachel.png' }] ,
    "0005": [{ medium: "Charcoal", dimensions: "9 x 14", sold: "FALSE", price: "600.00", title: "Hands", date_completed: '2015-01-01', description: "Charcoal drawing on ripped paper collage.", imageurl: 'hands.png' }] ,
    "0006": [{ medium: "Pastel", dimensions: "9 x 14", sold: "TRUE", price: "435.00", title: "Bicycle", date_completed: '2013-02-01', description: "This pastel drawing was completed during high school AP Art class.", imageurl: 'bicyclette.png' }] ,
    "0007": [{ medium: "Sculpture", dimensions: "9 x 11", sold: "FALSE", price: "1250.00", title: "Blossom Head", date_completed: '2012-07-01', description: "This resin cast scupture was created during Pre-College summer project as School for Visual Arts. ", imageurl: 'sculpture_scarey.png' }] ,
    "0008": [{ medium: "Sculpture", dimensions: "9 x 11", sold: "TRUE", price: "350.00", title: "Light", date_completed: '2012-07-01', description: "This light sculpture was completed during Pre-College summer project at School for Visual Arts.  Welded brass covered with colored tissue paper smothered in Super Glue.  Small tea light inside the base.", imageurl: 'sculpture_light.png' }] ,
    "0009": [{ medium: "Sculpture", dimensions: "9 x 11", sold: "FALSE", price: "900.00", title: "Torso", date_completed: '2012-03-01', description: "This clay coil scupture was completed during high school AP Art class.  Ceramic glazed.", imageurl: 'sculpture_torso.png' }] ,
    "0010": [{ medium: "Charcoal", dimensions: "8 X 11", sold: "FALSE", price: "150.00", title: "Sea", date_completed: '2013-10-01', description: '', imageurl: 'sea_creature.png' }] ,
    "0011": [{ medium: "Pencil", dimensions: "10 X 12", sold: "FALSE", price: "25.00", title: "Closet", date_completed: '2011-11-15', description: "This pencil drawing was completed during high school AP Art class.", imageurl: 'closet.png' }] ,
    "0012": [{ medium: "Pencil", dimensions: "10 X 12", sold: "TRUE", price: "25.00", title: "Eye", date_completed: '2011-12-01', description: "Pencil drawing for high school AP Art class.", imageurl: 'eye.png' }] ,
    "0013": [{ medium: "Watercolor", dimensions: "5 X 5", sold: "FALSE", price: "15.00", title: "Parfum", date_completed: '2015-03-01', description: "Watercolor study.", imageurl: 'parfum.png' }] ,
    "0014": [{ medium: "Watercolor", dimensions: "5 X 5", sold: "FALSE", price: "15.00", title: "Patisserie", date_completed: '2015-03-02', description: "Watercolor study.", imageurl: 'patisserie.png' }]                 
    };

    if (galleryItems[$scope.item_id]) {
        $scope.galleryItems = galleryItems[$scope.item_id];
    } else {
        $scope.item_error_text = "Sorry.  Cannot find that gallery item right now.";
    }


/*  Set item availability here.  May not be determined just by SOLD but other rules, too. Only 1 element max in array. */

//  console.log($scope.galleryItems);
//  console.log($scope.galleryItems[0].sold);

    if ($scope.galleryItems.length = 1) {
        if ($scope.galleryItems[0].sold == "FALSE") {
            $scope.item_for_sale = "YES"; 
            } 
        }

});