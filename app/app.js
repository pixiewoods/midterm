var galleryApp = angular.module('galleryApp', ['ngRoute']);

galleryApp.config(function($routeProvider){
	$routeProvider
	.when("/works", {
		controller:"GalleryWorksController",
		templateUrl: "app/partials/works.html"})
	.when("/welcome", {
		controller:"gallerywelcomecontroller.js",
		templateUrl: "app/partials/welcome.html"})
	.when("/", {
		redirectTo: "/welcome"})

});