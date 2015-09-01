var galleryApp = angular.module('galleryApp',['ngRoute','firebase'])
	.constant('FIREBASE_URL', 'https://glaring-torch-8310.firebaseio.com/');

galleryApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/login', {
		controller: 'galleryLoginController',
		templateUrl: 'app/partials/login.html'})

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

	.when('/admin', {
		controller: 'galleryAdminController',
		templateUrl: 'app/partials/admin.html'})

/*	.when("/about", {
		controller: "AboutStubController",
		template: "<div class=content><h2>About the Artist</h2></div>"})*/


	.when('/', {
		redirectTo: '/home'})

}]);