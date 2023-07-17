$(document).ready(function(){
    //click toggle bars
    $('#btn-toggle').click(function(){
        $('#main-menu-responsive').slideToggle();
    })


    let sildeUpToggleBars = () => {
        $('#main-menu-responsive').slideUp();
    }

    let closeSubMenu = () => {
        $('.arrow-down').prev().find('.sub-menu-responsive').removeClass('d-block');
        $('.arrow-down').html('<i class="fa-solid fa-chevron-down"></i>');
    }
    //resize windown close toggle bars
    
    $(window).resize(function(){
        sildeUpToggleBars();
        closeSubMenu();
    })
    //scroll windown close toggle bars

    $(window).scroll(function(){
        sildeUpToggleBars();
        closeSubMenu();
    })

    // click arrow down
    $('.arrow-down').click(function(){
        $(this).prev().find('.sub-menu-responsive').toggleClass('d-block');
        if($(this).prev().find('.sub-menu-responsive').hasClass('d-block'))
            $(this).html('<i class="fa-solid fa-chevron-up"></i>');
        else 
            $(this).html('<i class="fa-solid fa-chevron-down"></i>');
    })

})