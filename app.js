	var app = angular.module('toDoListModule', []);

app.controller('listController', function() {
	var vm=this;
	vm.listItems = ['Example 1', 'Example 2', 'Example 3'];
	vm.removeButtons =[];
	vm.detailsArr = [];
	vm.toDoThing;
	vm.details;


	vm.adding = function() {
		if (vm.toDoThing){
			vm.listItems.push(vm.toDoThing);
			document.getElementById('toDoInput').value = '';
			vm.toDoThing = '';
			};
		if (vm.details){
			vm.detailsArr.push(vm.details);
			document.getElementById('choreDetail').value = '';
			vm.details = '';
		}
		};
	vm.removeItem = function(index) {
		vm.listItems.splice(index ,1);
		}

});

