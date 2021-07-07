//JavaScriptDocument

$(document).ready(function(){

	$(".box").hover(function(){
		
		var _index = $(this).index();
		
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg");

		$(".content").eq(_index).show().siblings().hide();		
		
	});
	
	$(".content").mouseleave(function(){
		
		var _index = $(this).index();
		
		$(this).hide();
    	
		$(".box").eq(_index).removeClass("ch_bg");	
		
	});
	

	$("body").mouseleave(function(){
		
		$(".content").hide();
    	
		$(".box").removeClass("ch_bg");
	
		
	});
	
});




