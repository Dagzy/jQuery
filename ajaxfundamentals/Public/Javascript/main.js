$(document).ready(function(){
	$.ajax({
		type:'GET',
		url:'http://swapi.co/api/people/',
})
	.done(function(data){
		console.log(data);
	})
	.fail(function(data){
		alert("Error loading data")
	})





/*		success: function(data){
			console.log(data.results[0].name);
		},
		error: function(){
			alert("Error loading data.")
		}*/
		//use .done and .fail
	
	console.log("Hey, you guys!");
});