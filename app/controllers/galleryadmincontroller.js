galleryApp.controller('GalleryAdminController', function( $scope ) {

//  This controller is for future admin function.  Includes adding new gallery work.


	$scope.galleryItems= [
	{id: '0001', medium: 'Acrylic Paint', dimensions: "9 x 11", sold: 'FALSE', price: "950.00", title: 'The Drinker', date_completed: '2015-04-01', description: '', imageurl: 'scott_d.png' },
	{id: '0002', medium: 'Acrylic Paint', dimensions: "9 x 11", sold: 'FALSE', price: "850.00", title: 'Around the Corner', date_completed: '2015-04-15', description: '', imageurl: 'around_the_corner.png' },	
	{id: '0003', medium: 'Oil', dimensions: "8 X 11", sold: 'FALSE', price: "250.00", title: 'Hope Gangloff Master Copy', date_completed: '2015-02-01', description: '', imageurl: 'hope_gangloff_knockoff.png' },	
	{id: '0004', medium: 'Oil', dimensions: "45 x 20", sold: 'FALSE', price: "1050.00", title: 'Rachel', date_completed: '2015-02-01', description: '', imageurl: 'rachel.png' },
	{id: '0005', medium: 'Charcoal', dimensions: "9 x 14", sold: 'FALSE', price: "600.00", title: 'Hands', date_completed: '2015-01-01', description: '', imageurl: 'hands.png' },
	{id: '0006', medium: 'Pastel', dimensions: "9 x 14", sold: 'TRUE', price: "435.00", title: 'Bicycle', date_completed: '2013-02-01', description: '', imageurl: 'bicyclette.png' },
	{id: '0007', medium: 'Sculpture', dimensions: "9 x 11", sold: 'FALSE', price: "1250.00", title: 'Blossom Head', date_completed: '2012-07-01', description: '', imageurl: 'sculpture_scarey.png' },
	{id: '0008', medium: 'Sculpture', dimensions: "9 x 11", sold: 'TRUE', price: "350.00", title: 'Light', date_completed: '2012-07-01', description: '', imageurl: 'sculpture_light.png' },
	{id: '0009', medium: 'Sculpture', dimensions: "9 x 11", sold: 'FALSE', price: "900.00", title: 'Torso', date_completed: '2012-03-01', description: '', imageurl: 'sculpture_torso.png' }				
	]

    $scope.add_galleryitem_error = "";

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
        $scope.add_galleryitem_error = "You must provide a date in format yyyy/mm/dd";
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
    else if (!new_galleryitem.imageurl)
    {
        $scope.add_galleryitem_error = "Missing image URL";
    }
    else {

    //  Code placeholder ...
    //  Must find current max item ID and increment value to get unique ID for this item

        $scope.galleryItems.push( new_galleryitem );
        $scope.adding_galleryItem = {};
        $scope.add_galleryitem_error = "";
    }