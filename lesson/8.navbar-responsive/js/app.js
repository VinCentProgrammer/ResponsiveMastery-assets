$(document).ready(function(){
    //1. Click toggle menu
    $('.logo-btn-toggle .btn-toggle').click(function(){
        $('#header nav').toggleClass('d-block');
        return false;
    })
    // 2. Scroll window close nav menu
    $(window).scroll(function(){
        if($('#header nav').hasClass('d-block'))
            $('.logo-btn-toggle .btn-toggle').click();
    })
    // //3. Resize widow close nav menu
    $(window).resize(function(){
        if($('#header nav').hasClass('d-block'))
            $('.logo-btn-toggle .btn-toggle').click();
    })
})