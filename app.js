//okay, if the viewport is a certain size or smaller, we need to add/remove classes to the menu so that it changes to be a vertical nav that will get overlayed
var mqMedium = 768;
var mqLarge = 992;
var mainMenu = document.getElementById('main-menu');
var nelisMenu = document.getElementById('nelisMenu');

if (window.innerWidth < mqMedium) {
    mainMenu.classList.add('fixed-top');
    nelisMenu.classList.remove('sticky-top');
} else if (window.innerWidth >= mqMedium) {
    mainMenu.classList.remove('fixed-top');
    nelisMenu.classList.add('sticky-top');
}

function changeMenuClassesForMobile() {
    if (window.innerWidth < mqMedium) {
        mainMenu.classList.add('fixed-top');
        nelisMenu.classList.remove('sticky-top');
    } else if (window.innerWidth >= mqMedium) {
        mainMenu.classList.remove('fixed-top');
        nelisMenu.classList.add('sticky-top');
    }
}

window.onresize = changeMenuClassesForMobile;

//Shrinking sticky menu
$(window).scroll(function () {
    /* affix after scrolling 100px */
    if ($(document).scrollTop() > 100) {
        $(nelisMenu).addClass('shrink');
    } else {
        $(nelisMenu).removeClass('shrink');
    }
});