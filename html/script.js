var main = function(){
	
	$('form').submit(function(event) {
		var $input = $(event.target).find('input');
		 /* first argument is the element that triggered the action, in this case the form */
		 var comment = $input.val();

		 if(comment != ""){
		 	var html = $('<li>').text(comment);
		 	/*creates an li element and puts text in it */
		 	html.prependTo('#comments'); 
		 	/* # is how you reference id */
		 }

		 return false; //Ends the execution
	});
}

$(document).ready(main);/* Runs when page loads */

