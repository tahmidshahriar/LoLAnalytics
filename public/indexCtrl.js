(function () {
	var app = angular.module('LoL', []);
	var api = 'api_key=ef468113-9464-403e-9244-962b95cc33c4';
	app.controller('myCtrl', function ($scope, $http) {
		serverToMatch = [];
		_parallel();

  	function _parallel() {
      async.parallel([
      	loadNAJSON,
      	loadBRJSON,
      	loadEUNEJSON,
      	loadKRJSON,
      	loadLANJSON,
      	loadLASJSON,
      	loadOCEJSON,
      	loadRUJSON,
      	loadTRJSON
      	], check
      );
    }

    function check () {
			matchDetail('na', serverToMatch['NA'][0]);
		};

		function matchDetail(server, matchId) {
      matchRequest = 'https://' + server + '.api.pvp.net/api/lol/'
      + server + '/v2.2/match/' + matchId + '?' + api;
      $http.get(matchRequest).
      then(function(response) {
      	console.log(response);
		  }, function(response) {
		  	console.log("An error has occured");
		  });
    };

    function loadNAJSON(next) {
	    $http.get('NA.json').success(function(data) {
        serverToMatch['NA'] = data;
	      next();
      });
    }

    function loadBRJSON(next) {
	    $http.get('BR.json').success(function(data) {
        serverToMatch['BR'] = data;
	      next();
      });
    }

    function loadEUNEJSON(next) {
	    $http.get('EUNE.json').success(function(data) {
        serverToMatch['EUNE'] = data;
        next();
      });
    }

    function loadKRJSON(next) {
	    $http.get('KR.json').success(function(data) {
        serverToMatch['KR'] = data;
        next();
      });
    }

		function loadLANJSON(next) {
	    $http.get('LAN.json').success(function(data) {
        serverToMatch['LAN'] = data;
        next();
      });
    }

		function loadLASJSON(next) {
	    $http.get('LAS.json').success(function(data) {
        serverToMatch['LAS'] = data;
        next();
      });
    }

    function loadOCEJSON(next) {
	    $http.get('OCE.json').success(function(data) {
        serverToMatch['OCE'] = data;
        next();
      });
    }

		function loadRUJSON(next) {
	    $http.get('RU.json').success(function(data) {
        serverToMatch['RU'] = data;
        next();
      });
    }

    function loadTRJSON(next) {
	    $http.get('TR.json').success(function(data) {
        serverToMatch['TR'] = data;
        next();
      });
    }

  });

}());