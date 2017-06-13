//
//ready method event is waiting on the document to have loaded
//$ and jQuery are interchangeable
$(document).ready(function(){
	$("#example").css("background-color", "yellow");
	alert("Hey, the jQuery is working");
	$("h1").css("color", "red");
});