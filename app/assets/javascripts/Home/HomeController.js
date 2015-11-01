app.controller("HomeController", ['$scope', '$http', function ($scope, $http) {
	
	$scope.noteList = [40,50,60,70,80,90];

	$scope.playNote = function(note) {
		$http.get('/notes/' + note, {});
	}

	$scope.enterNote = function() {
		var keyboardMap = {
			a: ':c4',
			s: ':d4',
			d: ':e4',
			f: ':f4',
			g: ':g4',
			h: ':a4',
			j: ':b4',
			k: ':c5',
			l: ':d5'
		}
		n = keyboardMap[ $scope.composition.slice(-1) ];
		$scope.playNote(n);
	}

}]);
