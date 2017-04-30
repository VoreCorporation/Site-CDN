//animation effect(waypoint)
//paste this code under head tag or in a seperate js file.
// Wait for window load
"use strict";
$(window).on("load",function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    function onScrollInit(items, trigger) {
        items.each(function () {
            var osElement = $(this),
                osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay');

            osElement.css({
                '-webkit-animation-delay': osAnimationDelay,
                '-moz-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay
            });

            var osTrigger = ( trigger ) ? trigger : osElement;

            osTrigger.waypoint(function () {
                osElement.addClass('animated').addClass(osAnimationClass);
            }, {
                triggerOnce: true,
                offset: '90%'
            });
        });
    }
    $('.bxslider').bxSlider({
        pager: false,
        controls: true,
        pagerCustom: '#bx-pager1'
    });

    onScrollInit($('.os-animation'));
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));
});




$(document).ready(function () {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });

    $('.map').on({
        click: function () {
            $(this).find('iframe').addClass('clicked')
        },

        mouseleave: function () {
            $(this).find('iframe').removeClass('clicked')
        }
    });


    $('.bxslider2').bxSlider({
        pagerCustom: '#bx-pager'
    });


    $('.tabs .tab-links a').on("click", function (e) {
        var currentAttrValue = $(this).attr('href');
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });

    $('.s-tabs .s-tab-links li a').on("click", function (e) {
        var currentAttrValue = $(this).attr('href');
        // Show/Hide Tabs
        $('.s-tabs ' + currentAttrValue).show().siblings().hide();
        // Change/remove current tab to active
        $(this).parent('li').addClass('s-active').siblings().removeClass('s-active');
        e.preventDefault();
    });

    $('.skills li').each(function () {
        $(this).appear(function () {
            $(this).animate({opacity: 1, left: "0px"}, 800);
            var b = $(this).find(".progress-bar").attr("data-width");
            $(this).find(".progress-bar").animate({
                width: b + "%"
            }, 1300, "linear");
        });
    });

    $('.skillbar').each(function () {
        $(this).appear(function () {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    var filterList = {
        init: function () {
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['scale'],
                easing: 'smooth',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });
        },
        hoverEffect: function () {
        }
    };
    // Run the show!
    filterList.init();
});


