submitApp.controller('MainCtrl', function( $scope, $firebaseArray, FIREBASE_URL ){
	$scope.headLinks = [{ name: 'About', link: '#/#about' }, 
						 { name: 'Submit A Question', link: '#/#submit'}, 
						 { name: 'Vote On Submissions', link: '#/#vote'}]	
})