//created in terminal
//alert("JS Connected!"); //-used to verify that JS file is connected

//Check off specifi todos by clicking
$("li").click(function(){
	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
			color: "#000000",
			textDecoration: "none"
		});
	}else{
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}
});