$(document).ready(function(){
    var navOffset = $('nav').offset();
    $(window).scroll(function(){
        if( $(document).scrollTop() > navOffset.top ){
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });

    $('.modal_close').click(function(){
        $('.modal_wrap, #md_signin').hide();
    });
});

function md_signin(){
    $('.modal_wrap, #md_signin').show();
}