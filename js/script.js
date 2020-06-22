$(document).ready(function(){
    $('.mobile-menu').click(function(event) {
        $('.menu-btn, .nav').toggleClass('menu-active')
    });
});

$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:false,
        waitForAnimation:false,
        responsive:[
            {
                breakpoint: 768,
                    settings:{
                        arrows: false,

                    }
            }
        ]
    });
});


