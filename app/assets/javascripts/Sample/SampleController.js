app.controller("SampleController", ['$scope', '$http', function ($scope, $http) {
	
	$scope.sample = 'ambi_drone';
	$scope.options = {
		attack:  0.2,
		sustain: 0.2,
		release: 0.2,
		rate: 1
	};
	$scope.samples = ["ambi_soft_buzz", "ambi_swoosh", "ambi_drone", "ambi_glass_hum", 
		"ambi_glass_rub", "ambi_haunted_hum", "ambi_piano", "ambi_lunar_land", 
		"ambi_dark_woosh", "ambi_choir"];

	$scope.playSample = function() {
		var urlString = '/samples/' + $scope.sample 
			+ '?attack=' + $scope.options.attack
			+ '&sustain=' + $scope.options.sustain
			+ '&release=' + + $scope.options.release
			+ '&rate=' + + $scope.options.rate;
		$http.get(urlString, {});
	}

}]);
