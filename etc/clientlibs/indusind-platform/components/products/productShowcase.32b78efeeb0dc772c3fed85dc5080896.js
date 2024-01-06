/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- 
var modal_html = $('<div class="modal modal-fluid fade modal_cardbenefit modal_pageload" id="modal_pageload" tabindex="-1" role="dialog" aria-labelledby="modal_1" aria-hidden="true"><div class="modal-dialog modal-lg modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-body p-0"><a href="#" class="close" data-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24" style="width: 40px; height: 40px;"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg></a><div class="imgwrap"><a href="https://oldweb.indusind.com/digital-payment-solution/index.html" target="_blank"><img src="/content/dam/indusind-platform-images/home/desktop-img/desktop-overlay.jpg" alt="" class="w-100" /></a></div><div class="p-3"><strong> Important Notice:</strong> Our branches will operate from 10am-4pm (unless revised by local guidelines) till further notice. Branches in Madurai - Madurai Corporation Limits, Paravai Town Panchayat, all village panchayats of Madurai East, Madurai West and Thiruparankundram Blocks will operate from 10am-2pm, till July, 10th for select transactions and will function as per regular timings from July, 13th to 31st. Branches shall remain closed on 2nd/4th Saturday & all Sundays. <a href="/content/dam/indusind-platform-images/home/pdf/corona-virus-reduced-banking-hours-notice.pdf" target="_blank" class="text-burgundy font-weight-600 text-underline"> Know more</a></div></div></div></div></div>');
$(document).ready(function(){
   // setTimeout('$("main .product-section").css("opacity", "1")', 1000);
    $('.product-tabs li a:not([href])').on('click', function(){
        var head_height = $('header').height() + 130;
        $('html,body').animate({
                scrollTop: $('.product-section').offset().top - head_height},
        'slow');
   });

/* onload popup added on 02 june 2020 
    $('body').append(modal_html);
     if($('.navbar-nav .flate-tab .nav-item:first-child .nav-link').hasClass('active')){
        //console.log('first active');
         //$('#modal_pageload').modal('show');
         if (sessionStorage.getItem('#modal_pageload') !== 'true'){
                    $('#modal_pageload').modal('show');
                    sessionStorage.setItem('#modal_pageload', 'true');
          }
    }
}); */

//var modal_html =

////// for loading product ///////////////
window.onload = function() {

    $('.product-section').css('opacity', '1');
};
////// @end for loading product ///////////////

(function($) {
    'use strict';
    // variables
    var contextWindow = $(window);
    // ----------------------
    // ----------------------
    // ++ Banner Slider .. Start
    // ------------------------    
    $(document).ready(function() {
        $('.product-section').css('opacity', '1');
        $('ul.product-tabs li.tab-link a:not([href])').click(function() {
            var tab_id = $(this).attr('data-tab');
            $('ul.product-tabs li.tab-link a').removeClass('active');
            $('.product-tab-content .tab-pane').removeClass('show active');
            $(this).addClass('active');
            $("#" + tab_id).addClass('show active');
            // Swiper update on tab show
            //$("#" + tab_id).find('.swiper-container')[0].swiper.update();
            $('.product-section').removeClass('bg-assist');
        });

        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 0,
            slidesPerView: 7,
            freeMode: true,
            freeModeFluid: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            speed: 600,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                990: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 0,

                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                360: {
                    slidesPerView: 3,
                    spaceBetween: 0,

                }
            }
        });
        // ----------------------
        // ++ ellipsis text minimum line .. Start
        // ------------------------
        /* $('.ellipsis-single-line').ellipsis({
             lines: 1, // force ellipsis after a certain number of lines. Default is 'auto'
             ellipClass: 'ellip', // class used for ellipsis wrapper and to namespace ellip line
             responsive: true // set to true if you want ellipsis to update on window resize. Default is false
         });

         $('.two-lines').ellipsis({ lines: 2, responsive: true});
         $('.three-lines').ellipsis({ lines: 3, responsive: true});

         $('.ellipsis-triple-line').ellipsis({
             lines: 3, // force ellipsis after a certain number of lines. Default is 'auto'
             ellipClass: 'ellip', // class used for ellipsis wrapper and to namespace ellip line

         });*/


        if (contextWindow.width() > 992) {
            var btnSwiperFunction = function() {
                $(this).parent().parent().siblings().find('.swiper-nav').addClass('overflow-lg-hidden');
                $(this).parent().parent().siblings().find('.btn-swiper').fadeIn(100);
                $(this).parent().removeClass('overflow-lg-hidden');
                $(this).fadeOut(100);
            };
            $('.btn-swiper').on('click.thumb', btnSwiperFunction);
            // $('.btn-swiper').on('mouseenter',btnSwiperFunction);
            // $('.btn-swiper').on('mouseexit',function();

            $('.indusassist-lg').click(function() {
                //$('.product-section').addClass('bg-assist');
                $('.btn-swiper').parent().parent().siblings().find('.swiper-nav').addClass('overflow-lg-hidden');
                $('.btn-swiper').parent().parent().siblings().find('.btn-swiper').fadeIn(100);
                // $('#fancybox_indusassist').addClass('d-flex'); 
            });
            $('.cross-assist a').click(function() {
                // $('.product-section').removeClass('bg-assist');
                $('#fancybox_indusassist').removeClass('show active');
                $('#personal-tab-default').addClass('show active');
            });
        }

        if (contextWindow.width() > 300) {
            $('.text-slide-in').each(function() {
                // separates line
                var $t = $(this),
                    lines = $.trim($t.html()).split('<br>');

                $t.html('');
                // separate letter
                $.each(lines, function(i, val) {
                    $('<span class="line"></span>').appendTo($t);
                    val = $("<textarea />").html(val).text();
                    var letters = $.trim(val).split('');

                    $.each(letters, function(j, v) {
                        v = (v == ' ') ? '&nbsp;' : v;
                        $('<span class="letter">' + $.trim(v) + '</span>').appendTo($('.line:last', $t));
                    });

                });
            });
        }


    });


})(jQuery);




/*$('.dropdown-menu').on('click', function(event){
    // The event won't be propagated up to the document NODE and 
    // therefore delegated events won't be fired
    event.stopPropagation();
});
$('.ddlogin_link:first-child, .ddlogin_link:first-child a').addClass('active');
$('.ddlogin_link').click(function(){
    $('.login_list').hide();
    $('.ddlogin_link, .ddlogin_link a').removeClass('active');

    $(this).addClass('active');
    $(this).find('a').addClass('active')
    $(this).find('ul').show();
});*/

/*$(function(){
$('.bt-action-login .btn-primary').on('click', function(){
    if($('.bt-action-login .dropdown').hasClass('show')){
        $('.bt-action-login').removeClass('active');
    }
    else{
        $('.bt-action-login').addClass('active');
    }
});

});


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab

});  
*/

$(function() {
    if ($(window).width() < 992) {
        $('.slide-with-two-cards').each(function() {
            $(this).clone().appendTo($(this).parent()).find('.card:nth-child(1)').hide();
            $(this).find('.card:nth-child(2)').hide();
            $(this).find('.card picture').height('100px;')
        });
    }
});
$(document).ready(function() {
    $(".deeplink").on('click', function(e) {

        let hrefPath = $(this).attr('href');
        let deeppath = $(this).attr('data-attr-deeppath');
        if (!hrefPath.includes(".pdf")) {
            e.preventDefault();
            let hrefPath = $(this).attr('href');
            let deeppath = $(this).attr('data-attr-deeppath');
            // console.log("ttttt",hrefPath)
            //console.log("matter",deeppath)
            if (deeppath)
                window.location.href = hrefPath + '#' + deeppath;
            else
                window.location.href = hrefPath;
        }


    });
});