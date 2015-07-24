"use strict";

$(document).ready(function(){
	//alert('jquery test');
	
	var myModel = {
		personName: 'Bob', 
		personAge: 34
	};
	
	ko.applyBindings(myModel);
	
});

