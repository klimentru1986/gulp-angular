;(function(){
	'use strict'

	angular
		.module('ang.repeat',[])
			.config(RepeatConfig)
			.run(RepeatRun)
			.controller('AngrRepeatCtrl', AngrRepeatCtrl)
			.factory('RepeatUsersFactory', RepeatUsersFactory)

	function RepeatConfig ($stateProvider) {
		$stateProvider
			.state('angular.rep',{
				url:'repeat',
				templateUrl: 'app/angular/repeat/repeat.html',
				controller: 'AngrRepeatCtrl',
				controllerAs: 'arc'
			})
	};
	function RepeatRun () {};

	function AngrRepeatCtrl (RepeatUsersFactory) {

		var vm = this;

		RepeatUsersFactory.getUsers().success(function (data) {
			vm.users = data;
		});

		vm.reverse = true;

		vm.sortBy = function (propertyName) {
			vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
			vm.propertyName = propertyName;
		}


	}

	function RepeatUsersFactory ($http) {
		var service = {
			getUsers: getUsers,
		}

		return service;

		function getUsers () {
			return $http.get('app/angular/repeat/users.json')
				.success(function (data) {
					return data;
				})
				.error(function (err) {
					return err
				})
		}
	}
})();

