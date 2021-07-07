$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect  : 'none',
        closeEffect : 'none'
    });
});


$(".fancybox").fancybox({
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.4)'
            }
        }
    }
});

