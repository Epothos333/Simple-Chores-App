	var app = angular.module('toDoListModule', []);

app.controller('listController', function() {
	var Chore = function(chore, date, times, notes) {
		this.item = chore;
		this.date = date;
		this.times = times;
		this.notes = notes;
	};
	var vm=this;
	vm.listItems = [
		{
			item: 'Example 1',
			date: '01/01/99',
			times: '1:00 P.M.',
			notes: 'notes 1'
		},
		{
			item: 'Example 2',
			date: '02/02/92',
			times: '2:00PM',
			notes: 'notes 2'
		},
		{
			item: 'Example 3',
			date: '03/03/93',
			times: '3:00PM',
			notes: 'notes 3'
		}];

	var toDoThing = '';
	var date = '';
	var times = '';
	var notes = '';

	vm.adding = function() {
		vm.date = vm.date.toString().split("").splice(0,15).join("");

		var itemToAdd = new Chore(vm.toDoThing, vm.date, vm.times, vm.notes);

		if(!vm.date) {
			itemToAdd.detail = 'Not Specified';
		}
		if(!vm.times) {
			itemToAdd.times = 'Not Specified';
		}
		if(!vm.notes) {
			itemToAdd.notes = 'Not Specified';
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
		var showDate = '<p class="makeBlock"><span class="boldMe"> Date Due: </span>' + vm.listItems[index].date + '</span></p>';
		var showTime =  '<p class="makeBlock"><span class="boldMe"> Time Due: </span>' + vm.listItems[index].times + '</span></p>';
		var showNotes =  '<p class="makeBlock"><span class="boldMe"> Notes: </span>' + vm.listItems[index].notes + '</span></p>';
		var para = document.getElementById('detail');
		para.innerHTML = showDate + showTime + showNotes;
		}

});

