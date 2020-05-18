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
			$('.fa-user-circle').addClass('d-none');
			$('.meeting-buttons').addClass('btn-group-vertical').removeClass('btn-group');
			$('.breadcrumb').addClass('d-none');
			$('.breadcrumb-dropdown').removeClass('d-none');
			$('.meeting-treeview-collapser').removeClass('d-none');
			$('#meeting-treeview').removeClass('show');
		} else {
			$mainMenu.removeClass('fixed-top');
			$nelisMenu.addClass('sticky-top');
			$nelisMenuContents.removeClass('nav-overlay');
			$('.fa-user-circle').removeClass('d-none');
			$('.meeting-buttons').addClass('btn-group').removeClass('btn-group-vertical');
			$('.breadcrumb').removeClass('d-none');
			$('.breadcrumb-dropdown').addClass('d-none');
			$('.meeting-treeview-collapser').addClass('d-none');
			$('#meeting-treeview').addClass('show');
		}
	}
	// Execute on load
	checkWidth();
	// Bind event listener
	$(window).resize(checkWidth);

	//Sticky shrinking menu
	$(document).on("scroll", function () {
		if ($window.width() >= mqMedium) {
			if ($(document).scrollTop() > 100.99) {
				$nelisMenu.addClass("shrink");
			}
			else {
				$nelisMenu.removeClass("shrink");
			}
		}
	});

	//If NVLeg menu clicked and left overlay menu is open, close it
	$('#toggleNvLeg').on('click', function () {
		if ($('.nav-overlay').hasClass('show')) {
			$('.nav-overlay').removeClass('show');
			$('.tap-target').removeClass('active');
		}
	});

	//If main Nelis menu toggler is clicked (instead of swipe gesture), make sure to apply active to tap target
	$('#toggleNelisMain').on('click', function () {
		$('.tap-target').toggleClass('active');
	});

	//If we are on tablet and larger, when user opens a NELIS main menu item, put an overlay on the main area
	$('#nelisMain > .navbar-nav > .nav-item.dropdown > .dropdown-toggle').on('click', function () {
		if ($window.width() >= mqMedium) {
			$('#main-content').toggleClass('main-overlay');
		}
	});

	//touch gestures on mobile
	if (typeof Hammer !== 'undefined') {
		var swipeInElement = document.querySelector('.drag-target');
		if ($(swipeInElement).length > 0) {
			var swipeInMenu = new Hammer(swipeInElement);
			swipeInMenu.on('swiperight', function (e) {
				if (!$('.nav-overlay').hasClass('show')) {
					$('.nav-overlay').addClass('show');
					$('.tap-target').addClass('active');
				}
			});
		}

		var tapCloseElement = document.querySelector('.tap-target');
		if ($(tapCloseElement).length > 0) {
			var tapCloseMenu = new Hammer(tapCloseElement);
			tapCloseMenu.on('tap', function (e) {
				if ($('.nav-overlay').hasClass('show')) {
					$('.nav-overlay').removeClass('show');
					$('.tap-target').removeClass('active');
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
						$('.tap-target').removeClass('active');
					}
				});
			}
		}, 300);
	}

});