$(document).ready(function () {
    $('.searchbtn').click(function () {
        $('.side-menu-header2').removeClass("show");
        $('.header1').addClass("open");
        $('.header2').removeClass("dark");
    })
    $('.canclebtn').click(function () {
        $('.header1').removeClass("open");
    })
    function checkwidth() {
        var windowSize = $(window).width();
        if (windowSize <= 768) {
            $('.header2').addClass("show");
        }
        else {
            $('.header2').removeClass("show");
            $('.side-menu-header2').removeClass("show");
            $('.header2').removeClass("dark");
        }
    }
    checkwidth();
    $(window).resize(checkwidth);

    $('.navmenubtn').click(function () {
        if ($('.side-menu-header2').hasClass('show')) {
            $('.side-menu-header2').removeClass("show");
            $('.header2').removeClass("dark");
        }
        else {
            $('.side-menu-header2').addClass("show");
            $('.header2').addClass("dark");
        }
    })
    /*
    $('.navmenubtn').click(function () {
        $('.side-menu-header2').addClass("show");
        $('.header2').addClass("dark");
    })*/


    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
})