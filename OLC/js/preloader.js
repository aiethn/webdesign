$(function () { // this replaces document.ready
    setTimeout(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    }, 5000);
});
