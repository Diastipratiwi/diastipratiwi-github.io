$(document).ready(function () {
    $('.highlight-card').click(function () {
        $('.modal-highlight').show();
        $('.modal-highlight img').attr('src', $(this).find('img').attr('src'));
        $('.modal-highlight label').text($(this).find('label').text());
        $('.modal-highlight p').text($(this).find('p').text());
    });

    $('.modal-highlight').click(function () {
        $(this).hide();
    });

    $('.scrollto').click(function() {
        scrollTo($(this).data('target')); //scrollTo($(this).attr('data-target'));
    });
});

function scrollTo(targetid) {
    var target = $(`#${targetid}`);
    var body = $("html, body");
    body.stop().animate({
        scrollTop:target.offset().top-115
    }, 500);
}

