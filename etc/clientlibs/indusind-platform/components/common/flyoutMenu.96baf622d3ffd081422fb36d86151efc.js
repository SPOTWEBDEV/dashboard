$(document).ready(function() {
    $('.navDeepLinking').click(function() {
        var url, id, finalUrl
        url = $(this).attr('data-attr-value');
        id = $(this).attr('data-attr-id');
        finalUrl = url;
        if (typeof id != "undefined") {
            var finalUrl = url + "?id=" + id;
        }
        window.location.assign(finalUrl);

    })

    if (window.location.href.indexOf("/kyc-for-banking-customers") > -1) {
        $('.faqDisclaimer').find('.container').removeClass('px-50px');
    }

})