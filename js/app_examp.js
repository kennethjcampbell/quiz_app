$(document).ready(function() {
	$(".ryu").on("mouseenter", function() {
		$(this).find(".ryu-ready").show();
		$(this).find(".ryu-still").hide();
	}); 
	$(".ryu").on("mouseleave", function() {
		$(this).find(".ryu-ready").hide();
		$(this).find(".ryu-still").show();
	}); 

})