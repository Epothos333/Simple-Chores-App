	var app = angular.module('toDoListModule', []);

app.controller('listController', function() {
	var Chore = function(chore, detail) {
		this.item = chore;
		this.detail = detail;
	};
	var vm=this;
	vm.listItems = [
		{
			item: 'Example 1',
			detail: 'Detail 1'
		},
		{
			item: 'Example 2',
			detail: 'Detail 2'
		},
		{
			item: 'Example 3',
			detail: 'Detail 3'
		}];
	vm.removeButtons =[];
	vm.toDoThing;
	vm.detailInfo;


	vm.adding = function() {
		var itemToAdd = new Chore(vm.toDoThing, vm.detailInfo);

		if(!vm.detailInfo) {
			itemToAdd.detail = 'No info';
		}
		if (vm.toDoThing){
			vm.listItems.push(itemToAdd);
			document.getElementById('toDoInput').value = '';
			vm.toDoThing = '';
			};
		};
	vm.removeItem = function(index) {
		vm.listItems.splice(index ,1);
		}

	vm.showDetails = function(index) {
		var showThis = vm.listItems[index].detail;
		var para = document.getElementById('detail');
		para.innerHTML = showThis;
		}

});

