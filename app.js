//okay, if the viewport is a certain size or smaller, we need to add/remove classes to the menu so that it changes to be a vertical nav that will get overlayed
var mqMedium = 768;
var mqLarge = 992;
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

if (window.innerWidth >= mqMedium) {
    //Shrinking sticky menu
    $(window).scroll(function () {
        /* affix after scrolling 100px */
        if ($(document).scrollTop() > 100) {
            $(nelisMenu).addClass('shrink');
        } else {
            $(nelisMenu).removeClass('shrink');
        }
    });
}


$(document).ready(function () {
    // $('#toggleNelisMain').on('click', function () {
    //     $('.overlay').toggleClass('invisible');
    // });
    // $('.overlay').on('click', function () {
    //     $('#toggleNelisMain').click();
    //     $('.overlay').addClass('invisible');
    // });
});