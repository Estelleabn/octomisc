function check_name(name){
	if( name == "Gabriel"){
		return "Yeah, great !";
	}else if( name == "Clément"){
		return "MAZEL TOV ! We found Clément !";
	}else{
		var res= "True ! " + name + " is different from Gabriel and Clément !";
		return res;
	}
} 

$(document).ready(function(){
	alert(check_name("Gabriel"));
	$("h1").html("Hello <b>Again</b>").click(function(){
		$("h1").remove();
	});

});

