;(function(){
	'use strict'

	angular
		.module('app.ang',[
				'ang.model',
				'ang.repeat'
			])
			.config(AngConfig)
			.run(AngRun)
			.controller('AngCtrl', AngCtrl)

	function AngConfig ($stateProvider, $mdThemingProvider) {
		$stateProvider
			.state('angular', {
				url: '/angular',
				templateUrl: 'app/angular/main/ang.html',
				controller: 'AngCtrl',
				controllerAs: 'ac'
			})

		$mdThemingProvider.theme('red')
    		.primaryPalette('red')
    		.accentPalette('orange');
	};

	function AngRun () {};

	function AngCtrl () {
		
		var vm = this;
		
		vm.title='AngularJS';

		vm.list = [
			{
				name:'ng-model',
				sref: 'angular.model'
			},

			{
				name:'ng-repeat; $http',
				sref: 'angular.rep'
			}
		]
	}
})();

