;(function(){
	'use strict'

	angular
		.module('app',[
			'ui.router',
			'ngMaterial',
			'ngMdIcons',
			'app.navbar',
			'app.home',
			'app.ang'
			])
			.config(AppConfig)
			.run(AppRun)

	function AppConfig ($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/home');
	};
	function AppRun () {};
})();

