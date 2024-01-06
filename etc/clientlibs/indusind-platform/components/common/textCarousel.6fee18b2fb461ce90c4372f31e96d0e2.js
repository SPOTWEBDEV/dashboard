$(document).ready(function() {
    var kycslider = new Swiper('.kyc-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,

        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1200,

        // init: false,
        pagination: {
            el: '.swiper-pagination-kyc',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    // $('.kyc-slider .swiper-button-prev, .kyc-slider .swiper-button-next').removeClass('swiper-button-disabled');
});