;(function(){
	'use strict'

	angular
		.module('app')
			.controller('LeftNavCtrl', LeftNavCtrl)
			.component('viewsMain',{
				templateUrl: 'app/components/views-main/views-main.html',
				bindings:{
					title: '=',
					list: '='
				}
			})

	function LeftNavCtrl ($mdSidenav) {
		
		var vm = this;

		vm.navToggle = navToggle;
		vm.open = open;

		function navToggle () {
			$mdSidenav('left').toggle();
		}

		function open () {
			$mdSidenav('left').open();
		}
	}

})();

