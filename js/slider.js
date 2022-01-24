$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:3,
        autoplay:false,
        speed: 500,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
});