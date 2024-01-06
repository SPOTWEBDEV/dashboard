$(function() {

    /*  link to open modal or simple link */

    $('.enjoy_offers a.link_view[href*="http"]').each(function() {
        $(this).removeAttr('data-toggle data-target');
    });


    if (document.location.href.indexOf("inclusive-banking.html") > -1) {

        $('a[href="#product-detail-"]').click(function() {
            $(".tg-navigation ul li a").removeClass("active");
            $(this).addClass("active");
            console.log("clicked");
            $("html, body").animate({
                    scrollTop: $("#product-detail-").offset().top - 190
                },
                600
            );
        });

        $('a[href="#list-of-teasers-"]').click(function() {
            $(".tg-navigation ul li a").removeClass("active");
            $(this).addClass("active");
            console.log("clicked");
            $("html, body").animate({
                    scrollTop: $("#list-of-teasers-").offset().top - 160
                },
                600
            );
        });

        $('a[href="#requestCallBackForm"]').click(function() {
            console.log("clicked");
            $(".tg-navigation ul li a").removeClass("active");
            $(this).addClass("active");
            $("html, body").animate({
                    scrollTop: $("#requestCallBackForm").offset().top - 140
                },
                600
            );
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() === 0) {
                $(".tg-navigation ul li a").removeClass("active");
                console.log("You've scrolled 100 pixels.");
            }

            var scrollDistance = $(window).scrollTop() + 196;

            if ($("#product-detail-").position().top <= scrollDistance) {
                $(".tg-navigation ul>li>a.active").removeClass("active");
                $('a[href="#product-detail-"]').addClass("active");
            }

            if ($("#list-of-teasers-").position().top <= scrollDistance) {
                $(".tg-navigation ul>li>a.active").removeClass("active");
                $('a[href="#list-of-teasers-"]').addClass("active");
            }

            if ($("#requestCallBackForm").position().top <= scrollDistance) {
                $(".tg-navigation ul>li>a.active").removeClass("active");
                $('a[href="#requestCallBackForm"]').addClass("active");
            }
        });
    }


    if (window.location.hash) {
        if ($(window).width() <= 992)

        {
            var $moburl = window.location.hash.slice(1);
            console.log($moburl);
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $("#" + $moburl).offset().top - 60

                }, 500);
            }, 1500);
        }
    }

});