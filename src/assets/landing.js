const Main = {

    init: function(){
        $("#secondaryMenuToggler").click(function(){
            Main.openSideMenu();
        });
    
        $("#secondaryMenuClose").click(function(){
            Main.closeSideMenu();
        });

        $('aside#sideMenu a.nav-link').click(function(){
            Main.closeSideMenu();
        });

        $('.sidemenu-overlay').click(function(){
            Main.closeSideMenu();
        });
    },

    openSideMenu: function (){
        $('.sidemenu-overlay').show();
        $('aside#sideMenu').show();
        $('aside#sideMenu').removeClass('slide-out');
        $('aside#sideMenu').addClass('slide-in');
        $('body').addClass('noscroll'); 
    },
    closeSideMenu: function (){
        $('.sidemenu-overlay').hide();
        $('aside#sideMenu').removeClass('slide-in');
        $('aside#sideMenu').addClass('slide-out');
        $('body').removeClass('noscroll'); 
    },

    checkAnimation: function (){
        $('section.homepage-sc .content-wrap').each(function(){
            let e = $(this);
            if(Main.elementOnScreen(e)){
                e.addClass('fadeIn');
            } else {
                e.removeClass('fadeIn');
            }
                
        });
    },

    elementOnScreen: function (e){

        let eTop = e.offset().top;
        let eBottom = eTop + e.outerHeight();
        let vpTop = $(window).scrollTop();
        let vpBottom = vpTop + $(window).height();

        return eBottom > vpTop && eTop < vpBottom;
    }

}



$(document).ready(function(){
    Main.init();
})


$(window).on('scroll', function(e) {
    Main.checkAnimation();
});