;(function(){
	'use strict'

	angular
		.module('app.home',[])
			.config(HomeConfig)
			.run(HomeRun)

	function HomeConfig ($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'app/home/home.html'
			})
	};
	function HomeRun () {};
})();

