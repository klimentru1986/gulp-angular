;(function(){
	'use strict'

	angular
		.module('app.navbar',[])
			.config(NavbarConfig)
			.run(NavbarRun)
			.controller('NavbarCtrl', NavbarCtrl)

	function NavbarConfig () {};
	function NavbarRun () {};
	function NavbarCtrl ($log) {
		var vm = this;

		vm.nav = [
			{
			name: 'AngularJS',
			sref: 'angular'
			},

			{
			name: 'Angular Material',
			sref: 'material'
			},

			{
			name: 'Typescript',
			sref: 'typescript'
			},

			{
			name: 'Angular2',
			sref: 'angular2'
			},
		];
	};
})();

