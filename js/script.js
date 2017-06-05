// Document Ready

jQuery(document).ready(function($) {

$(function(){
  	if($('body').is('.home')){
	  	$(window).on("scroll touchmove", function() {
			if ($(document).scrollTop() >= $("#intro").position().top) {
					$('body').css('background', $("#intro").attr("data-color"));
					$('nav').css('background', $("#intro").attr("data-color"));
					$('#down-label').text('');
			};
			if ($(document).scrollTop() > $("#now").position().top) {
					$('body').css('background', $("#now").attr("data-color"))
					$('nav').css('background', $("#now").attr("data-color"));
					$('#down-label').text('Then');
			};
			if ($(document).scrollTop() > $("#then").position().top) {
					$('body').css('background', $("#then").attr("data-color"))
					$('nav').css('background', $("#then").attr("data-color"));
					$('#down-label').text('About Me');
			};
			if ($(document).scrollTop() > $("#about-me").position().top) {
					$('body').css('background', $("#about-me").attr("data-color"))
					$('nav').css('background', $("#about-me").attr("data-color"));
					$('#down-label').text('Connect');
					$('#down-directional').css('visibility', 'visible');
			};
			if ($(document).scrollTop() >= $("#connect").position().top) {
					$('body').css('background', $("#connect").attr("data-color"))
					$('nav').css('background', $("#connect").attr("data-color"));
					$('#down-directional').css('visibility', 'hidden');
			};
		});
  	}
});	

});