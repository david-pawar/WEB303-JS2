/*
	WEB 303 Assignment 1 - jQuery
	{David Pawar | 0800287 }
*/

$(document).ready(function() {   //it enables to run js only when DOM is fully laoded
	
	$('#yearly-salary, #percent').on('change', function() {  //selected elements which have 'yearly-salary' and 'percent' as their id value
	  // Getting the values from the input fields
	  let yearlySalary = parseFloat($('#yearly-salary').val()) || 0;
	  let percent = parseFloat($('#percent').val()) || 0;
  
	  // Calculating the tech spending
	  let techSpending = (yearlySalary * percent) / 100;
  
	  // Displaying the tech spending with a dollar sign
	  $('#amount').text('$' + techSpending.toFixed(2));
	});
  });
  

//  event 'change' runs code whens triggered when the value of an input element is changed and the element loses focus while event 'keyup' runs code  each time a key on the keyboard is released after being pressed