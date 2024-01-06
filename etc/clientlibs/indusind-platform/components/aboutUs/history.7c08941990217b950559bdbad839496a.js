var galleryThumbs = new Swiper('.about-thumbs', {
    spaceBetween: 0,
    slidesPerView: 7,
    //freeMode: true,
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        1024: {
            slidesPerView: 7,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 0
        },
        767: {
            slidesPerView: 4,
            direction: 'horizontal',
            spaceBetween: 0
        },
        360: {
            slidesPerView: 3,
            direction: 'horizontal',
            spaceBetween: 0
        }
    }
});
var galleryTop = new Swiper('.about-see', {
    spaceBetween: 10,
    thumbs: {
        swiper: galleryThumbs
    }
});
///////////////////////////////////////////////////////////////////////////////////////////      
var historyinner = new Swiper('.history_inner', {
    spaceBetween: 0,
    slidesPerView: 1,
    //freeMode: true,
    //speed:1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

var award_slider = new Swiper('.award_list_carousel', {
    spaceBetween: 0,
    slidesPerView: 1,
    //freeMode: true,
    //speed:1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});


///////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    var arraySub = [],
        newarr = [],
        arrayglobal = [];

    $(".knmrbtn").click(function() {
        arrayglobal = [];

        var childidnew = document.getElementById('yearHeading');
        var modalYear = $(this).data("year");
        var modalMainHeading = $(this).data("mainheadingattr");
        var modalHeading = $(this).data("heading");
        var modalImg = $(this).data("imgsrc");
        var modalAltImg = $(this).data("altimg");
        var modalContent = $(this).data("content");


        $(this).parentsUntil(".parentDiv").next().find(".awrdloop").each(function() {

            var ulobj = {};
            var ularr = [];

            var awardHeading = $(this).find("p").html().trim();
            var finaltrim = awardHeading.replace(/[^\x20-\x7E]\s\s+/gmi, ' ');
            ulobj.heading = finaltrim;

            $(this).children().children().each(function() {

                var product = $(this).html().trim();
                var finaltrimnew = product.replace(/\s{2,}/gmi, ' ');
                ularr.push(finaltrimnew);

            });

            ulobj.ulitems = ularr;
            arrayglobal.push(ulobj);

        });

        populateAwards(arrayglobal);

        $("#maintitle").contents().filter(function() {
            return this.nodeType === 3;
        }).remove();
        $("#yearHeading").html(modalYear);
        childidnew.insertAdjacentText('afterend', modalMainHeading);

        $("#milestonetitle").html(modalHeading);
        $("#imgsrcId").attr('src', modalImg);
        $("#imgsrcId").attr('alt', modalAltImg);
        $("#modalinnercont").html(modalContent);


    });

    function populateAwards(arrayglobal) {
        var awardsTemplate = $("#awrdPopulation").html();
        var compiledTemplate = Handlebars.compile(awardsTemplate);
        $("#outerCont").html(compiledTemplate(arrayglobal));

    }


});