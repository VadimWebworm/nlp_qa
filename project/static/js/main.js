$(function () {
    $(".screen-height").height($(window).height());

    $(window).resize(function () {
        $(".screen-height").height($(window).height());
    });
    
    $("button").click(function() {
        $('.jumbotron__inner-item p').removeClass('animation-true').eq($(this).index()).addClass("animation-true");
		$("button").removeClass("active").eq($(this).index()).addClass("active");
    });
});

