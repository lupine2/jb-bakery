// main.js
$(function(){
    // menu 
    $('.depth2').hide();

    // hover
    $('.depth1 li').hover(
        function(){
            // 마우스오버
            $(this)
                .find('.depth2')
                .stop()
                .fadeIn();
        },
        function(){
            // 마우스아웃
            $(this)
                .find('.depth2')
                .stop()
                .hide();
        }
    );
    
    // visual slide
    var img_num = 0;
    var img_width = 1200; 
    var duration = 3000; 

    var play_slider = setInterval(function(){
        if(img_num >= 3){
            img_num = 0;
        }

        $('#visual .slide').css('margin-left', -(img_width * img_num) + 'px');
        img_num++;
    }, duration);
});
