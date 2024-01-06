var GrayScaleFix = (function() {
    var needToFix = /(MSIE 10)|(Trident.*rv:11\.0)|( Edge\/[\d\.]+$)/.test(navigator.userAgent);

    function replaceImage(image) {
        var tmpImage = new Image();
        tmpImage.onload = function() {
            var imgWrapper = document.createElement('span'),
                svgTemplate =
                '<svg xmlns="http://www.w3.org/2000/svg" id="svgroot" viewBox="0 0 ' + tmpImage.width + ' ' + tmpImage.height + '" width="100%" height="100%">' +
                '<defs>' +
                '<filter id="gray">' +
                '<feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0" />' +
                '</filter>' +
                '</defs>' +
                '<image filter="url(&quot;#gray&quot;)" x="0" y="0" width="' + tmpImage.width + '" height="' + tmpImage.height + '" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + tmpImage.src + '" />' +
                '</svg>';

            imgWrapper.innerHTML = svgTemplate;
            imgWrapper.className = 'grayscale-fix';
            image.parentNode.insertBefore(imgWrapper, image);

            image.style.cssText += 'visibility:hidden;display:block';
            imgWrapper.querySelector('svg').style.position = 'absolute';
            imgWrapper.style.cssText = 'display:inline-block;position:relative;';
            imgWrapper.appendChild(image);
        };
        tmpImage.src = image.src;
    }

    function replaceAll() {
        var images = document.querySelectorAll('img.grayscale');
        for (var i = 0; i < images.length; i++) {
            replaceImage(images[i]);
        }
    }

    if (needToFix) {
        document.addEventListener('DOMContentLoaded', replaceAll);
    }

    return {
        replace: replaceImage,
        refresh: replaceAll
    };
}());

//load more

$(document).ready(function() {

    //$('.display-director-cards').eq(1).children().hide();
    console.log('test');
    var displayData, hideLoadMore, itemsTodisplay;
    //itemsTodisplay = 9;

    //displayData();
    /**
     * Load More Button Click Event
     */
    $(".load-more-btn").click(function() {
        itemsTodisplay = 3;
        displayData();
        hideLoadMore();
    });

    /**
     * Function to hide Load More Button
     */
    hideLoadMore = function() {
        var elements = $(".display-director-cards").eq(1).children('[style="display: none;"]').length;
        if (elements === 0) {
            $(".load-more-btn").hide();
        }
    }
    /**
     * Function to display the hidden cards
     */
    displayData = function() {
        $(".display-director-cards").eq(1).children('[style="display: none;"]').slice(0, itemsTodisplay).show();
    }
    displayData();

});