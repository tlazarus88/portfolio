// Document Ready

jQuery(document).ready(function($) {

// Then Deep Links

//Index

//Project Pages
$(function(){
	var url = window.location.href;
	
	if(url.indexOf('?show=editorial-start') != -1 || url.indexOf('&editorial-start') != -1)
	$(window).bind("load", function(){
			$.fn.fullpage.moveTo('section3', 1);
			$('.main-carousel').flickity( 'selectCell', 'editorial-start' );
		});

    if(url.indexOf('?show=illustration-start') != -1 || url.indexOf('&illustration-start') != -1)
    	$(window).bind("load", function(){
			$.fn.fullpage.moveTo('section3', 1);
			$('#illustration-start-button').click();
		});
    if(url.indexOf('?show=mock-start') != -1 || url.indexOf('&mock-start') != -1)
    	$(window).bind("load", function(){
			$.fn.fullpage.moveTo('section3', 1);
			$('#mock-start-button').click();
		});
});

// Down Arrow Functionality	
$('#down-directional').click(function(){
	$.fn.fullpage.moveSectionDown();
});

// Flickity Anchor Links
$('.then-buttons').on( 'click', '.then-button', function() {
  var selector = $(this).attr('data-selector');
  $('.main-carousel').flickity( 'selectCell', selector );
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

// Javascript Resizing
$(document).ready(function() {
    $(window).resize(function() {

    	// Now Tile Height Resizing
        var tileWidth = $('.tile-img-bg').width();
        $('.tile-img-bg').css({'height':tileWidth+'px'});
    }).resize();
});

// Modal Functionalities
$('.tile-zoom-btn').click(function(){
	var modal = $(this).attr("data-id");
	$('#'+modal).css('display', 'block').promise().done(function(){
		window.dispatchEvent(new Event('resize'));
    });
    $('#down-directional').css('visibility', 'hidden');
  	
})
$('.modal-close').click(function(){
	$('.modal').css('display', 'none');
	$('#down-directional').css('visibility', 'visible');
})

// Then Button Toggle Styles
$('.then-button').click(function(){
	$('.then-button').removeClass('active');
	$(this).addClass('active');
})


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

	// afterLoad: function(anchorLink, index){
// 	// 	var loadedSection = $(this);

// 	// 	if(index == 1){
// 	// 		$('body').css('background', $("#intro").attr("data-color"));
// 	// 		$('nav').css('background', $("#intro").attr("data-color"));
// 	// 		$('#down-label').text('');
// 	// 	};

// 	// 	if(index == 2){
// 	// 		$('body').css('background', $("#now").attr("data-color"))
// 	// 		$('nav').css('background', $("#now").attr("data-color"));
// 	// 		$('#down-label').text('Then');
// 	// 	};

// 	// 	if(index == 3){
// 	// 		$('body').css('background', $("#then").attr("data-color"))
// 	// 		$('nav').css('background', $("#then").attr("data-color"));
// 	// 		$('#down-label').text('About Me')
// 	// 	};

// 	// 	if(index == 4){
// 	// 		$('body').css('background', $("#about-me").attr("data-color"))
// 	// 		$('nav').css('background', $("#about-me").attr("data-color"));
// 	// 		$('#down-label').text('Connect');
// 	// 	};

// 	// 	if(index == 5){
// 	// 		$('body').css('background', $("#connect").attr("data-color"))
// 	// 		$('nav').css('background', $("#connect").attr("data-color"));
// 	// 		$('#down-directional').css('visibility', 'hidden');
// 	// 	};

// 	// },

	
	
});






});