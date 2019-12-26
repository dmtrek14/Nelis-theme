//TODO: clean this the hell up
var mqMedium = 768;
var mainMenu = document.getElementById('mainMenu');
var nelisMenu = document.getElementById('nelisMenu');
var nelisMenuContents = document.getElementById('nelisMain');

if (window.innerWidth < mqMedium) {
    mainMenu.classList.add('fixed-top');
    nelisMenu.classList.remove('sticky-top');
    nelisMenuContents.classList.add('nav-overlay');
} else if (window.innerWidth >= mqMedium) {
    mainMenu.classList.remove('fixed-top');
    nelisMenu.classList.add('sticky-top');
    nelisMenuContents.classList.remove('nav-overlay')

    //Shrinking sticky menu
    $(window).scroll(function () {
        /* affix after scrolling 100px */
        if ($(document).scrollTop() > 100) {
            $(nelisMenu).addClass('shrink');
        } else {
            $(nelisMenu).removeClass('shrink');
        }
    });
};

function changeMenuClassesForMobile() {
    if (window.innerWidth < mqMedium) {
        mainMenu.classList.add('fixed-top');
        nelisMenu.classList.remove('sticky-top');
        nelisMenuContents.classList.add('nav-overlay');
    } else if (window.innerWidth >= mqMedium) {
        mainMenu.classList.remove('fixed-top');
        nelisMenu.classList.add('sticky-top');
        nelisMenuContents.classList.remove('nav-overlay')
    }
}


window.onresize = changeMenuClassesForMobile;