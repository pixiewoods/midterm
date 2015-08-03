var galleryApp = angular.module('galleryApp', ['ngRoute']);

galleryApp.config(function($routeProvider){
	$routeProvider
	.when("/works", {
		controller:"GalleryWorksController",
		templateUrl: "app/partials/works.html"})

	 .when("/works/:item_id", {
        controller: "GalleryItemController",
        templateUrl: "app/partials/work.html"})

	.when("/welcome", {
       controller: "GalleryWelcomeController",
        templateUrl: "app/partials/welcome.html"})

	.when("/", {
		redirectTo: "/welcome"})

});