var submitApp = angular.module('submitApp', ['ngRoute', 'firebase']).constant('FIREBASE_URL', 'https://365questions.firebaseio.com/')

submitApp.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', { controller: 'MainCtrl', templateUrl: 'app/partials/main.html' })
		.when('/page_not_found', { controller: 'ErrorCtrl', templateUrl: 'app/partials/page_not_found.html' })
		.otherwise({ redirectTo: '/page_not_found' })
	$locationProvider.html5Mode(true)
})