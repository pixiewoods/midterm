var galleryApp = angular.module('galleryApp',['ngRoute','firebase'])
	.constant('FIREBASE_URL', 'https://glaring-torch-8310.firebaseio.com/')
	.constant('FILEPICKER_KEY', 'AU5HVDKxsQYewUzKMZVmTz');


galleryApp.config(['$routeProvider', function($routeProvider){
	$routeProvider

	// Routes that do not require login

	.when('/login', {
		controller: 'galleryLoginController',
		templateUrl: 'app/partials/login.html'})

	.when('/logout', {
		controller: 'galleryLoginController',
		templateUrl: 'app/partials/logout.html'})

	.when('/register',{
		controller: 'galleryLoginController',
        templateUrl: 'app/partials/register.html'})
	
	.when('/works', {
		controller:'galleryWorksController',
		templateUrl: 'app/partials/works.html'})

	 .when('/works/:item_id', {
        controller: 'galleryItemController',
        templateUrl: 'app/partials/work.html'})

	.when('/home', {
       controller: 'galleryHomeController',
        templateUrl: 'app/partials/home.html'})

	// Route that requires login

		.when('/cart', {
       controller: 'galleryCartController',
        templateUrl: 'app/partials/cart.html'})


	// Route that requires login and 'Admin' role

	.when('/admin', {
		controller: 'galleryAdminController',
		templateUrl: 'app/partials/admin.html'})
		//resolve: {
		//	requiresLogin: true,
		//	requiredRole:  ['Admin'] }})

	.when('/', {
		redirectTo: '/home'})

}]);

