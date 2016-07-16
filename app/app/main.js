;(function(){
	'use strict'

	angular
		.module('app',[
			'ui.router',
			'ngMaterial',
			'app.navbar',
			'app.home'
			])
			.config(AppConfig)
			.run(AppRun)

	function AppConfig ($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/home');
	};
	function AppRun () {};
})();

