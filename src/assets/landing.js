
$(document).ready(function(){

    $("#secondaryMenuToggler").click(function(){
        $('.sidemenu-overlay').show();
        $('aside.sidemenu-wrapper').show();
        $('aside.sidemenu-wrapper').removeClass('slide-out');
        $('aside.sidemenu-wrapper').addClass('slide-in');
        $('html').addClass('noscroll');
    });


    $("#secondaryMenuClose").click(function(){
        $('.sidemenu-overlay').hide();
        $('aside.sidemenu-wrapper').removeClass('slide-in');
        $('aside.sidemenu-wrapper').addClass('slide-out');
        $('html').removeClass('noscroll');
    });


})
