


$(document).ready(function() {
	/*$(".test").click(function(e){
		console.log(e);
	});
	$(".test").on("click", function(e){
		console.log(e.target);
	});*/

	/*$(".test").on("click","#insetp", function(){
		alert("新加入的p");
	});

	$("#add_test").on("click", function(){
		$(".test").append('<p id="insetp">hello</p>')
	});*/

	
	<?php
	$color="red";
	echo "My car is " . $color . "<br>";
	echo "My house is " . $COLOR . "<br>";
	echo "My boat is " . $coLOR . "<br>";
	?>
	$("p").show("fast",function(){
   		$(this).text("Animation Done!");
 	});
});