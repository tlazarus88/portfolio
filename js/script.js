// Document Ready

jQuery(document).ready(function($) {

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#intro").position().top) {
				$('body').css('background', $("#intro").attr("data-color"));
		};
		if ($(document).scrollTop() > $("#now").position().top) {
				$('body').css('background', $("#now").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#then").position().top) {
				$('body').css('background', $("#then").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#about-me").position().top) {
				$('body').css('background', $("#about-me").attr("data-color"))
		};
		if ($(document).scrollTop() >= $("#connect").position().top) {
				$('body').css('background', $("#connect").attr("data-color"))
		};
});

});