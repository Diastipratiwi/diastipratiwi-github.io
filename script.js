$(document).ready(function() {
    $(window).scroll(function() {
        var scroll=$(window).scrollTop(); 
        if (scroll >=300){$("nav").addClass("dark-nav"); 
            $(".navbar-fixed").removeClass("mt-20"); 
            $("nav").removeClass("transparent");
        }
        else {
            $("nav").removeClass("dark-nav"); 
            $(".navbar-fixed").addClass("mt-20"); 
            $("nav").addClass("transparent");
        }
    })
});

$(document).ready(function () {
    $('.scrollto').click(function() {
        scrollTo($(this).data('target')); //scrollTo($(this).attr('data-target'));
    });

    $('.animatedskills').click(function() {
        var skills = $('.sectionone').find('.skills-animation');

        for(var i=0; i<skills.length; i++){
            var el = $(skills[i]);
            var clone = el.clone(true);
            el.before(clone);
            var spesifikClass = el.attr('class').replace('skills-animation ', '');
            $(`.${spesifikClass}:last`).remove();
        }
    });

});

function scrollTo(targetid) {
    var target = $(`#${targetid}`);
    var body = $("html, body");
    body.stop().animate({
        scrollTop:target.offset().top-70
    }, 500);
}



