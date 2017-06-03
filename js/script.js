// Document Ready

jQuery(document).ready(function($) {

scrollIntervalID = setInterval(bgColor, 10);

function bgColor() {
	var topNow = $('#now').offset().top;

	if ($(window).scrollTop() >= (topNow)) {
		$('body').css('background-color','var(--soft-green-two, #63bf66');
	} else {
		$('body').css('background-color','var(--soft-green, #76D275');

	}
}
});