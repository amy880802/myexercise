//JavaScriptDocument

$(document).ready(function(){
    
    $(".box").eq(0).addClass("ch_bg");
    
    $(".content").each(function(index){
        
            $(".content").eq(index).css({"left":480*index, "top":-480*index});
            
        })
    
    $(".box").click(function(){
        var _index = $(this).index();
                
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
        
        $(".content").each(function(index){           
            $(".content").eq(index).animate({left:480*index-(480*_index)},500);
        })
    });
    
});
