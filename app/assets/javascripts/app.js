var app = angular.module('appSonic', [
    'templates', 
    'ngRoute', 
    'ngResource', 
    'directives', 
    'ngMaterial',
    'ngAnimate'
]);

app.config([
'$routeProvider', function ($routeProvider) {
    return $routeProvider.when('/', {
        templateUrl: "Synth/Synth.html",
        controller: 'SynthController'
    }).when('/Sample', {
        templateUrl: "Sample/Sample.html",
        controller: 'SampleController'
    })
}
]);

var directives  = angular.module('directives', []);

// Other packages = 'geochart', 'table', 'treemap', 'wordtree'

app.factory('ChartInitializer', function ($rootScope, $window, $q) {
    var deferred = $q.defer();

    $window.google.load('visualization', '1',
        {
            packages: ['corechart'],
            callback: function () {
                $rootScope.$apply(function () {
                    deferred.resolve();
                });
            }
        });

    //Usage: ChartInitializer.initialized.then(callback)
    return {
        initialized: deferred.promise
    };
});

app.factory('TimelineInitializer', function ($rootScope, $window, $q) {
    var deferred = $q.defer();

    $window.google.load('visualization', '1',
        {
            packages: ['timeline'],
            callback: function () {
                $rootScope.$apply(function () {
                    deferred.resolve();
                });
            }
        });

    //Usage: TimelineInitializer.initialized.then(callback)
    return {
        initialized: deferred.promise
    };
});

app.factory('MapInitializer', function ($rootScope, $window, $q) {
    //Google's url for async maps initialization accepting callback function
    var asyncUrl = 'https://maps.googleapis.com/maps/api/js?callback=',
        deferred = $q.defer();

    //Callback function - resolving promise after maps successfully loaded
    $window.googleMapsInitialized = deferred.resolve;

    //Async loader
    var asyncLoad = function (asyncUrl, callbackName) {
        var script = document.createElement('script');
        //script.type = 'text/javascript';
        script.src = asyncUrl + callbackName;
        document.body.appendChild(script);
    };

    //Start loading google maps
    asyncLoad(asyncUrl, 'googleMapsInitialized');

    //Usage: MapInitializer.initialized.then(callback)
    return {
        initialized: deferred.promise
    };
});
