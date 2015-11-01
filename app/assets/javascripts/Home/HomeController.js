app.controller("HomeController", ['$scope', '$http', function ($scope, $http) {
	
	$scope.noteList = [40,50,60,70,80,90];
	$scope.synth = ':blade';
	$scope.synths = ["beep", "blade", "bnoise", "cnoise", "dark_ambience", "dsaw", "dull_bell",
      "fm", "gnoise", "growl", "hollow", "hoover", "mod_beep", "mod_dsaw",
      "mod_fm", "mod_pulse", "mod_saw", "mod_sine", "mod_tri", "noise", "piano",
      "pnoise", "pretty_bell", "prophet", "pulse", "saw", "sine", "square",
      "subpulse", "supersaw", "tb303", "tri", "zawa"];

	$scope.playNote = function(note) {
		var urlString = '/notes/' + note + '?synth=' + $scope.synth;
		$http.get(urlString, {});
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
