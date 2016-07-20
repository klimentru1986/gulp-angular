;(function(){
	'use strict'

	angular
		.module('ang.model',[])
			.config(ModelConfig)
			.run(ModelRun)
			.controller('AngModelCtrl', AngModelCtrl)

	function ModelConfig ($stateProvider) {
		$stateProvider
			.state('angular.model', {
				url: '/model',
				templateUrl: 'app/angular/model/model.html',
				controller: 'AngModelCtrl',
				controllerAs: 'amc'
			})
	};
	function ModelRun () {};

	function AngModelCtrl () {
		var vm = this;

		vm.user = {
			name: 'Василий Алибабаевич',
			phone: '+7(999)999-99-99',
			email: ''
		}

	}
})();

