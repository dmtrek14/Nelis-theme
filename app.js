var mqMedium = 768;
var $mainMenu = $('#mainMenu');
var $nelisMenu = $('#nelisMenu');
var $nelisMenuContents = $('#nelisMain');


$(function () {
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < mqMedium) {
            $mainMenu.addClass('fixed-top');
            $nelisMenu.removeClass('sticky-top');
            $nelisMenuContents.addClass('nav-overlay');
        } else {
            $mainMenu.removeClass('fixed-top');
            $nelisMenu.addClass('sticky-top');
            $nelisMenuContents.removeClass('nav-overlay');

            $(window).scroll(function () {
                if ($(document).scrollTop() > 100) {
                    $nelisMenu.addClass('shrink');
                } else {
                    $nelisMenu.removeClass('shrink');
                }
            });
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);


    $('#toggleNvLeg').on('click', function () {
        if ($('.nav-overlay').hasClass('show')) {
            $('.nav-overlay').removeClass('show');
        }
    });

    if (typeof Hammer !== 'undefined') {
        var swipeInElement = document.querySelector('.drag-target');
        if ($(swipeInElement).length > 0) {
            var swipeInMenu = new Hammer(swipeInElement);
            swipeInMenu.on('swiperight', function (e) {
                if (!$('.nav-overlay').hasClass('show')) {
                    $('.nav-overlay').addClass('show');
                }
            });
        }

        var tapCloseElement = document.querySelector('.tap-target');
        if ($(tapCloseElement).length > 0) {
            var tapCloseMenu = new Hammer(tapCloseElement);
            tapCloseMenu.on('tap', function (e) {
                if ($('.nav-overlay').hasClass('show')) {
                    $('.nav-overlay').removeClass('show');
                }
            });
        }

        setTimeout(function () {
            var swipeOutElement = document.getElementById('nelisMain');
            var swipeOutMenu;

            if ($(swipeOutElement).length > 0) {
                swipeOutMenu = new Hammer(swipeOutElement);

                swipeOutMenu.on('swipeleft', function (e) {
                    if ($('.nav-overlay').hasClass('show')) {
                        $('.nav-overlay').removeClass('show');
                    }
                });
            }
        }, 300);
    }

});