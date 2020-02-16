$(function(){

    var mixer = document.querySelector(".products__inner-box");
    if (mixer) {
        mixer = mixitup('.products__inner-box');
    }

    $(".rate-star").rateYo({
        rating: 5,
        starWidth : "12px",
        readOnly: true
    });

    $('.product-slider-inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2

                }
            }
        ]
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function() {
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });

    $('.icon-th-large').on('click', function () {
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });
});