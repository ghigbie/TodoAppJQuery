//created in terminal
//alert("JS Connected!"); //-used to verify that JS file is connected

//Check off specifi todos by clicking
// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color: "#000000",
// 			textDecoration: "none"
// 		});
// 	}else{
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

$("li").click(function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("span").click(function(event){ //this can cause event bubbling
	$(this).parent().fadeOut(2000, function(){
		$(this).remove(); //thiremoves the parent element after the fadeout() is called
	}); 
	event.stopPropagation(); //this stops the bubbling up from happening
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var textItem = $(this).val(); //grabbing new todo text from input
		$("ul").append(`<li>${textItem}</li>`); //this appends the new text to the end of the li
		//I would like to clear the field after I get the item
	}
});