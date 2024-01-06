$(document).ready(function() {
    $('.reachus_modal').on('shown.bs.modal', function() {
        $('body').addClass('noscroll');
        $('.top_notify').addClass('zindex0');

    }).on('hidden.bs.modal', function() {
        $('body').removeClass('noscroll');
        $('.top_notify').removeClass('zindex0');
    });

    if (window.location.hash) {
        if ($(window).width() >= 992) {

            var $deskurl = window.location.hash.slice(1);
            console.log($deskurl);
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $("#" + $deskurl).offset().top - 160

                }, 500);
            }, 2000);


        } else {
            var $moburl = window.location.hash.slice(1);
            console.log($moburl);
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $("#" + $moburl).offset().top - 60

                }, 500);
            }, 2000);
        }
    }

    $('.tg-navigation>ul>li>a[href^="#"]').click(function() {
        //console.log('clicked on reach us');

        if ($(window).width() >= 992) {

            $('html, body').animate({
                scrollTop: $("#ReachUs").offset().top - 175

            }, 500);



        } else {

            $('html, body').animate({
                scrollTop: $("#ReachUs").offset().top - 60

            }, 500);

        }



    });


});