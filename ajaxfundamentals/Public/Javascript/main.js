$(document).ready(function(){
	$.ajax({
		type:'GET',
		url:'http://swapi.co/api/people/',
		success: function(data){
			console.log(data.results[0].name);
		},
		error: function(){
			alert("Error loading data.")
		}
	})
});