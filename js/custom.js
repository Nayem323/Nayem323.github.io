
$(function () {
    "use strict";

    // Slimscrollbars
    
    $('.scroll-sidebar').slimScroll({
        position: 'left'
        , size: "5px"
        , height: '100%'
        , color: '#dcdcdc'
     }); 
    $('.message-center').slimScroll({
        position: 'right'
        , size: "5px"
        
        , color: '#dcdcdc'
     });
    
    
    $('.aboutscroll').slimScroll({
        position: 'right'
        , size: "5px"
        , height: '80'
        , color: '#dcdcdc'
     });
    $('.message-scroll').slimScroll({
        position: 'right'
        , size: "5px"
        , height: '570'
        , color: '#dcdcdc'
     });
    $('.chat-box').slimScroll({
        position: 'right'
        , size: "5px"
        , height: '470'
        , color: '#dcdcdc'
     });
    
    $('.slimscrollright').slimScroll({
        height: '100%'
        , position: 'right'
        , size: "5px"
        , color: '#dcdcdc'
     });
	 
	// Closes the sidebar menu
    $(".menu-toggle").click(function(e) {
		e.preventDefault();
		$("#sidebar-wrapper").toggleClass("active");
		$(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
		$(this).toggleClass("active");
	});

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Services carousel

  $("#services-carousel").owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 800,
    paginationSpeed: 800,
    smartSpeed: 500,
    autoplay: true,
    singleItem: true,
    loop: true,
    responsive:{
      0:{
        items:1
      },
      680:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });

  //Skill bar
  var skillsDiv = jQuery('#skills');

  jQuery(window).on('scroll', function() {
    var winT = jQuery(window).scrollTop(),
      winH = jQuery(window).height(),
      skillsT = skillsDiv.offset().top;
    if (winT + winH > skillsT) {
      jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({
          width: jQuery(this).attr('data-percent')
        }, 1000);
      });
    }
  });

//  Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });


//Animated headline js

  $('.animate-scale').animatedHeadline({
    animationType: 'clip'
  });

// Animations
  var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('animated') ) {
        
        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function(){

          $('body .animate-box.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') {
                el.addClass('fadeIn animated');
              } else if ( effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated');
              } else if ( effect === 'fadeInRight') {
                el.addClass('fadeInRight animated');
              } else if ( effect === 'fadeInDown') {
                el.addClass('fadeInDown animated');
              } else {
                el.addClass('fadeInUp animated');
              }

              el.removeClass('item-animate');
            },  k * 200, 'easeInOutExpo' );
          });
          
        }, 100);
        
      }

    } , { offset: '85%' } );
  };

 //Navbar Active
  $('body').scrollspy({
    target: '#sideNav',
    offset: 3
  });


  // Document on load.
  $(function(){

    contentWayPoint();
    
  });
    
});