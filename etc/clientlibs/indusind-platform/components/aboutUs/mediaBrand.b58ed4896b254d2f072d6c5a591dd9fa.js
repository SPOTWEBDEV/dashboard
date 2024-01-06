$(document).ready(function() {
    $(".deeplink").on('click', function(e) {
        let hrefPath = $(this).attr('href');
        let deeppath = $(this).attr('data-attr-deeppath');
        if (!hrefPath.includes(".pdf")) {
            e.preventDefault();

            if (deeppath) {
                window.location.href = hrefPath + '#' + deeppath;
                window.location.reload();
            } else {
                window.location.href = hrefPath;
            }
        }
    });

});