//TODO: clean this the hell up
var mqMedium = 768;
var mainMenu = document.getElementById('mainMenu');
var nelisMenu = document.getElementById('nelisMenu');
var nelisMenuContents = document.getElementById('nelisMain');
//var buttonGroup = document.querySelector('.btn-group');

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

if (window.innerWidth < mqMedium) {
    mainMenu.classList.add('fixed-top');
    nelisMenu.classList.remove('sticky-top');
    nelisMenuContents.classList.add('nav-overlay');
    //buttonGroup.classList.replace('btn-group', 'btn-group-vertical');
} else if (window.innerWidth >= mqMedium) {
    mainMenu.classList.remove('fixed-top');
    nelisMenu.classList.add('sticky-top');
    nelisMenuContents.classList.remove('nav-overlay')
    //buttonGroup.classList.replace('btn-group-vertical', 'btn-group');
};


ready(() => {
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
    } else {
        if (document.querySelector('.nav-overlay').classList.contains('show')) {
            //listen for click on elipsis and close the nav panel
        }
    }
});

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