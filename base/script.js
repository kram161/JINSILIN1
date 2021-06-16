$(document).ready(function () {
    $('.ftr-btn').on('click', function (e) {
        $('html,body').stop().animate({scrollTop: $('header').offset().top}, 1000);
        e.preventDefault();
    });
});