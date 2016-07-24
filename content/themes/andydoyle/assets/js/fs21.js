(function($) {

"use strict";

var SEARCH_URL = 'https://www.google.com.hk/search?q=site:qubaoming.me+'

var closeMenu = function(e) {
	$('body').removeClass('menu-open');
	$('.site-nav-switch').removeClass('active');

	if(!$(e.target).hasClass('blog-says')) {
		$('.nav-search').removeClass('open-search')
	}
	e.stopPropagation();
};

var toggleMenu = function(e) {
	$('body').toggleClass('menu-open');
	$('.site-nav-switch').toggleClass('active');
	e.stopPropagation();
	return false
};
$(function() {
	$('.site-nav-switch').on('click', toggleMenu);
	$('.navbar-toggle').on('click', toggleMenu);
	$('.site-menu').on('click', function (e) {
		e.stopPropagation();
	});

	$(".navbar-text").click(function() {
		$(this).parents('.nav-search').addClass('open-search')
		$('#search').focus();
	})
	$(document).on('click', closeMenu);
	$('.search').on('click', function (e) {
		e.stopPropagation();
	});
	$('#search').on('keydown', function(e) {
		if(e.which === 13) {
			window.open(SEARCH_URL + $(this).val(), 'search')
		}
	})
	$(window).scroll(function() {
	    var e = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
	    $(".progressbar").css("width", e + "%")
	})
});
})(jQuery);