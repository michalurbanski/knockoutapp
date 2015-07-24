"use strict";

$(document).ready(function(){
	//alert('jquery test');
	
	var myModel = {
		personName: 'Bob', 
		personAge: 34
	};
	
	var items = [
		{firstName: 'michael'},
		{firstName: 'john'}	
	];
	
	var viewModel = {
		myModel: myModel, 
		items: items
	};
	
	ko.applyBindings(viewModel);
	//ko.applyBindings(myModel);
	//ko.applyBindings(items);
	
});

