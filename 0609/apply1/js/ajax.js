// JavaScript Document
$(document).ready(function(){
	
	$("nav").load("nav.html");
	$("footer").load("footer.html");
	
	$("#jc").change(function(){
		
		var s1=$("select[name='jc']").val();
		$("section").css({"justify-content":s1});
		
	});
	
	$("#ai").change(function(){
		
		var s2=$("select[name='ai']").val();
		$("section").css({"align-items":s2});
		
	});
	
	var pn = $("body").data("pagenum");
		
		switch (pn){
			
			case 0:
			getcon('js/list.json');
			break;
			
			case 1:
			getcon2('js/list.json');			
			break;
					
		}
		
		$("section").css({"display":"none"}).fadeIn(1000);
	
});

function getcon(filename) {
	
	$.getJSON(filename, function(data){
		
		$("section").empty();
	
		$.each(data, function(index, en){	
		
		var html = '<div class="box">';
    	html +='<div class="imgbox">';
		html +='<img src="'+en['��𣇉��']+'">';
        html +='</div>';
        html +='<h3>'+en['�����']+'</h3>';
        html +='<p>'+en['��苷誨']+'</p>';
        html +='<p>'+en['雿𡏭��']+'</p>';
        html +='<p>'+en['撠箏站']+'</p>';
    	html +='</div>' 
		
		$("section").append(html);
		
		});
		
	});
	
	return false;
}

function getcon2(filename) {
	
	$.getJSON(filename, function(data){
		
		$("section").empty();
		$.each(data, function(index, en){	
		
		var html = '<div class="box">';
    	html +='<div class="imgbox">';
		html +='<img src="'+en['��𣇉��']+'">';
        html +='</div>';
        html +='<h3>'+en['�����']+'</h3>';
        html +='<p>'+en['��苷誨']+'</p>';
        html +='<p>'+en['雿𡏭��']+'</p>';
        html +='<p>'+en['撠箏站']+'</p>';
    	html +='</div>' //��敺䔶�滨鍂�����
		
		if(en['��憿�'] == "���"){
		$("section").append(html);
		}
		});
	});
	
	return false;
}