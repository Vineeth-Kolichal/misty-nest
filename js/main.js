function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

    // Animations with anime.js
    anime({
        targets: '.intro-text h1',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: 500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.intro-text p',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: 800,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.btn-custom',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: 1100,
        easing: 'easeOutExpo'
    });

    // Header animation
    var heroText = document.querySelector('.hero-text');
    var nav = document.querySelector('#menu');
    var navBrand = document.querySelector('.navbar-brand');

    var heroTextPosition = heroText.getBoundingClientRect().top;

    window.addEventListener('scroll', function() {
        if (window.scrollY > heroTextPosition) {
            if (!nav.classList.contains('scrolled')) {
                nav.classList.add('scrolled');
                navBrand.innerHTML = 'Misty Nest';
                anime({
                    targets: navBrand,
                    color: '#4CAF50',
                    duration: 1000,
                    easing: 'easeInOutQuad'
                });
            }
        } else {
            if (nav.classList.contains('scrolled')) {
                nav.classList.remove('scrolled');
                navBrand.innerHTML = '';
                anime({
                    targets: navBrand,
                    color: '#fff',
                    duration: 1000,
                    easing: 'easeInOutQuad'
                });
            }
        }
    });

}());


}
main();