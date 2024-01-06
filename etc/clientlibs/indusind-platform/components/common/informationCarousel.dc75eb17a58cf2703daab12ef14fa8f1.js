$(document).ready(function() {
    var infoslider = new Swiper('.important-info-slider', {
        slidesPerView: 5,
        spaceBetween: 2,
        loop: false,
        /*freeMode: true,
        freeModeFluid: true,*/
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },
        speed: 1200,
        grabCursor: true,
        // init: false,
        pagination: {
            el: '.swiper-pagination-info',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 2,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 2,
            },
            360: {
                slidesPerView: 1.25,
                spaceBetween: 1,
            }
        }
    });

    $(".important-info-slider").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    $(".comment-copy").each(function() {
        text = $(this).text();
        if (text.length > 131) {
            $(this).html(text.substr(0, 131) + '<span class="elipsis text-primary" data-toggle="tooltip" data-placement="top" title="' + text + '">  ...Read more</span>');
        }
    });
});