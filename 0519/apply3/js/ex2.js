// JavaScript Document
$(document).ready(function(){
		
		$(".box:eq(0)").addClass("ch_bg");
		
		$(".content:eq(0)").show();
		
	    $(".box").click(function(){
		
			var _index = $(this).index();
			
			$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
			
			$(".content").eq(_index).fadeIn(500).siblings().fadeOut(1000);	
		
		});
		
});