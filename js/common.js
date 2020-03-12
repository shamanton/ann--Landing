var swiper = new Swiper('.powerfull__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    speed: 4000,
    initialSlide: 2,
    autoplay: {
        delay: 300,
    }
});

if ($('.set').length) {
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).parent().removeClass("active");

            $(this).siblings(".content").slideUp(300);
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");

            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(300);
            $('.set').removeClass("active");
            $(this)
                .siblings(".content")
                .slideDown(300);
            $(this).parent().addClass("active");
        }
        return false;
    })

    $('.accordion_set').each(function () {
        $('')


    });
    // $(".accordion_set:odd").appendTo('.accordion__right-panel');
}

$('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('.hamburger_menu').slideToggle();
});

$('.footer__dropdown-menu-row').find('a').click(function () {
    $(this).toggleClass('footer__angle-up');
});