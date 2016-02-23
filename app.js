	var app = angular.module('toDoListModule', []);

app.controller('listController', function() {
	var vm=this;
	vm.listItems = [];
	vm.removeButtons =[];
	vm.toDoThing;

	vm.adding = function() {
		if (vm.toDoThing){
		vm.listItems.push(vm.toDoThing);
		document.getElementById('toDoInput').value = '';
		vm.toDoThing = '';
	};
	};
	vm.removeItem = function(index) {
		vm.listItems.splice(index ,1);
	}

});

