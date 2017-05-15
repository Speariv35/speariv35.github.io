/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


	/*----------------------------------------------------*/
	/*	Sticky Navigation
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var y = $(window).scrollTop(),
		    topBar = $('header');
     
	   if (y > 1) {
	      topBar.addClass('sticky');
	   }
      else {
         topBar.removeClass('sticky');
      }
    
	});
	

	/*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   toggleButton.on('click', function(event){
		event.preventDefault();

		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

  	if (toggleButton.is(':visible')) nav.addClass('mobile');

  	$(window).resize(function() {
   	if (toggleButton.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('#main-nav-wrap li a').on("click", function() {   

   	if (nav.hasClass('mobile')) {   		
   		toggleButton.toggleClass('is-clicked'); 
   		nav.fadeOut();   		
   	}     
  	});


   /*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'

	});


	/*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
  	$(window).load(function() {

	   $('#testimonial-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: "",
	      animation: 'slide',
	      controlNav: true,
	      directionNav: true,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	      touch: true,
	   });

   });


	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------*/
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();
   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

		var holder = $(e.currentTarget).find('.makeorder');
		var text = 'Хочу заказать - ' + holder.parents('.bottom-part').find('.plan-title').text();
		$('textarea').val(text);




	});
  

   /*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------*/ 

	$('input, textarea, select').placeholder()  


	/*---------------------------------------------------- */
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://astrosoul.us15.list-manage.com/subscribe/post?u=cd57b7929c13960160919a99b&amp;id=1912240c16'

	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
	  'submit': 'Отсылаем...',
	  0: '<i class="fa fa-check"></i> Мы выслали вам на E-mail подтверждение',
	  1: '<i class="fa fa-warning"></i> Введите правильный E-mail адрес.',
	  2: '<i class="fa fa-warning"></i> E-mail адрес не валидный.',
	  3: '<i class="fa fa-warning"></i> E-mail адрес не валидный.',
	  4: '<i class="fa fa-warning"></i> E-mail адрес не валидный.',
	  5: '<i class="fa fa-warning"></i> E-mail адрес не валидный.'
	};


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


 	/*---------------------------------------------------- */
	/*	Send Form
	------------------------------------------------------ */


	$('#contact-form').on('submit', function (e) {
		var url = "php/mail.php";
		$.ajax({
			type: "POST",
			url: url,
			data: $("#contact-form").serialize()
		}).done(function (msg) {
			if (msg == "OK") {
				document.getElementById("contact-form").reset();
				var message = '<p class="success message">Заявка успешно отправлена!</p>';
			} else {
				var message = msg;
			}
			$("#contact-form").append(message);
			setTimeout(function () {
				$(".message").remove();
			}, 10000);

		}).fail(function () {
			var message = '<p class="err message">Возникла ошибка! Попробуйте позже</p>';
			$("#contact-form").append(message);
			setTimeout(function () {
				$(".message").remove();
			}, 10000);
		});
		e.preventDefault();

	});


 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});

})(jQuery);