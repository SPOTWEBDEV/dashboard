function card_slider() {
    var cardBenefitSlider = new Swiper('.card-privileges-slider', {
        slidesPerView: 4,
        spaceBetween: 60,
        loop: false,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
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
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            360: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    });
}

$(document).ready(function() {
    card_slider();


    var cardBenefitSlider2 = new Swiper('.slide-three-items', {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: false,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
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
                slidesPerView: 3,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            360: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }

    });



    var swiper__slidecount2 = $('.slide-three-items .swiper-slide').length;
    var swiper__slidecount = $('.card-privileges-slider .swiper-slide').length;
    if ($(window).width() > 640) {
        if (swiper__slidecount2 < 4) {
            $('.slide-three-items .swiper-button-prev, .slide-three-items .swiper-button-next').remove();
        }

        if (swiper__slidecount <= 4) {
            console.log(swiper__slidecount);
            $('.card-privileges-slider .swiper-button-prev, .card-privileges-slider .swiper-button-next').remove();
        }

    }
});