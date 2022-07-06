$( document ).ready(function() {
    $('.logo').click(function(){
		location.href = "/";
	})
	
	$('#join').click(function(){
		$(".modal-wrap").css("display", "inline-block");
		$(".join-modal").css("display", "inline-block");
	})
	
	$('#login').click(function(){
		$(".modal-wrap").css("display", "inline-block");
		$(".login-modal").css("display", "inline-block");
	})
	
	$('.modal-close-btn').click(function(){
		$(".modal-wrap").css("display", "none");
		$(".join-modal").css("display", "none");
		$(".login-modal").css("display", "none");
	})
	
	$('.goLogin').click(function(){
		$(".join-modal").css("display", "none");
		$(".login-modal").css("display", "inline-block");
	})
	
	$('.goJoin').click(function(){
		$(".join-modal").css("display", "inline-block");
		$(".login-modal").css("display", "none");
	})
});

