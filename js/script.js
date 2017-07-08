// Document Ready

jQuery(document).ready(function($) {

// Down Arrow Functionality	
$('#down-directional').click(function(){
	$.fn.fullpage.moveSectionDown();
});

// Hamburger Animation
$(document).ready(function(){
	
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
		$('#hamburger-menu').fadeToggle("fast");
	});

	// Close Hamburger on Internal Links

	$('.hamburger-link-home').click(function(){
		$('#hamburger').toggleClass('open');
		$('#hamburger-menu').fadeToggle("fast");
	});

});

// Call Fullpage Plugin
$('#fullpage').fullpage({

	// Background Color Transition
	onLeave: function(index, nextIndex, direction){
		var leavingSection = $(this);

		if(index == 1 && direction =='down'){
			$('body').css('background', $("#now").attr("data-color"))
			$('nav').css('background', $("#now").attr("data-color"));
			$('#down-label').text('Then');
		};

		if(index == 2 && direction =='down'){
			$('body').css('background', $("#then").attr("data-color"))
			$('nav').css('background', $("#then").attr("data-color"));
			$('#down-label').text('About Me')
		}
		else if(index == 2 && direction == 'up'){
			$('body').css('background', $("#intro").attr("data-color"));
			$('nav').css('background', $("#intro").attr("data-color"));
			$('#down-label').text('');
		};

		if(index == 3 && direction =='down'){
			$('body').css('background', $("#about-me").attr("data-color"))
			$('nav').css('background', $("#about-me").attr("data-color"));
			$('#down-label').text('Connect');
		}
		else if(index == 3 && direction == 'up'){
			$('body').css('background', $("#now").attr("data-color"))
			$('nav').css('background', $("#now").attr("data-color"));
			$('#down-label').text('Then');
		};

		if(index == 4 && direction =='down'){
			$('body').css('background', $("#connect").attr("data-color"))
			$('nav').css('background', $("#connect").attr("data-color"));
			$('#down-directional').css('visibility', 'hidden');

		}
		else if(index == 4 && direction == 'up'){
			$('body').css('background', $("#then").attr("data-color"))
			$('nav').css('background', $("#then").attr("data-color"));
			$('#down-label').text('About Me');
		};

		if(index == 5 && direction == 'up'){
			$('body').css('background', $("#about-me").attr("data-color"))
			$('nav').css('background', $("#about-me").attr("data-color"));
			$('#down-label').text('Connect');
			$('#down-directional').css('visibility', 'visible');

		
	};
	
	// Anchor Link Manipulation
	anchors: ['section1', 'section2', 'section3', 'section4', 'section5']

		

	}
	
});




});