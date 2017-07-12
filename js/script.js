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

// On Viewport Function For Animations

function onViewport(el, elClass, offset, callback) {
  /*** Based on http://ejohn.org/blog/learning-from-twitter/ ***/
  var didScroll = false;
  var this_top;
  var height;
  var top;
  
  if(!offset) { var offset = 0; }
 
  $(window).scroll(function() {
      didScroll = true;
  });
 
  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      top = $(this).scrollTop();
 
      $(el).each(function(i){
        this_top = $(this).offset().top - offset;
        height   = $(this).height();
 
        // Scrolled within current section
        if (top >= this_top && !$(this).hasClass(elClass)) {
          $(this).addClass(elClass);
 
          if (typeof callback == "function") callback(el);
        }
      });
    }
  }, 100);
}

	// Element Animations

	// Mobile Animations 
	if($(window).width() <= 700){
		onViewport(".mobile-img", "animated fadeInUp", 500);
		onViewport(".desktop-img", "animated fadeInUp", 500);
		onViewport(".more-work-container", "animated fadeInUp", 500);
	} else {
	// Desktop Animations
		onViewport(".mobile-img", "animated fadeInUp", 500);
		onViewport(".desktop-img", "animated fadeInUp", 900);
		onViewport(".more-work-container", "animated fadeInUp", 1000);
	}
	

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