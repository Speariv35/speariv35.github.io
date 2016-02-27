
/*
 * Custom
 */


(function($){
    $.fn.fancybox = function(){


			var $link = this;
    		var $body = $('body');
    		var $modal;
    		var $overlay;
            var present = false;

    		function showModal(e) {
                e.preventDefault();

                if (!present) {
                $link = $(this); 
    			var href = $link.attr('href');

    			$modal = $('<div class="fancybox-modal"><img src="' + href + '"></div>');
    			$overlay = $('<div class="fancybox-overlay"></div>');

                e.stopPropagation();
				
				$body.append($overlay);
    			$body.append($modal);
    			$overlay.one('click', hideModal); 
                present = true;
            } 

    		}

    		function hideModal() {
    			$modal.hide();
    			$overlay.hide();
                present = false;
    		}


    		$link.on('click', showModal);

    	    return this;
    }
 
})(jQuery);



$(function() {


// JCARAUSEL

  $('.jcarousel').jcarousel({
  	  wrap: 'circular'});

          $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
      target: '+=1'
  });


  $('.jcarousel-pagination')

  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })

  $('.jcarousel-pagination').jcarouselPagination({
      item: function(page) {
          return '<a></a>';
      }
  });

    $('.jcarousel').jcarouselAutoscroll({
      interval: 5000,
      target: '+=1',
      autostart: true
  });

/*FANCYBOX INIT*/


      $('a.fancybox').fancybox({
  });


/* ACCORDION  */

// Start condition



var allPanels = $('.banners__accordion  .accordion__content').hide();
    
  $('.accordion__block').click(function() {
   

     if ($(this).hasClass('accordion__block--active')) {
      $(this).next().slideUp(300);
       $(this).children('.opener').html('+');
        $(this).removeClass( 'accordion__block--active' );
        

    } else {

    allPanels.not($(this).next()).slideUp(300);
    $('.accordion__block').children('.opener').html('+');
    $('.accordion__block').removeClass( 'accordion__block--active' );
    $(this).children('.opener').html('-');
    $(this).addClass( 'accordion__block--active' );
    $(this).next().slideDown(300);
    return false;
  }
  });


   });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKlxyXG4gKiBDdXN0b21cclxuICovXHJcblxyXG5cclxuKGZ1bmN0aW9uKCQpe1xyXG4gICAgJC5mbi5mYW5jeWJveCA9IGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuXHRcdFx0dmFyICRsaW5rID0gdGhpcztcclxuICAgIFx0XHR2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XHJcbiAgICBcdFx0dmFyICRtb2RhbDtcclxuICAgIFx0XHR2YXIgJG92ZXJsYXk7XHJcbiAgICAgICAgICAgIHZhciBwcmVzZW50ID0gZmFsc2U7XHJcblxyXG4gICAgXHRcdGZ1bmN0aW9uIHNob3dNb2RhbChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmVzZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkbGluayA9ICQodGhpcyk7IFxyXG4gICAgXHRcdFx0dmFyIGhyZWYgPSAkbGluay5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgXHRcdFx0JG1vZGFsID0gJCgnPGRpdiBjbGFzcz1cImZhbmN5Ym94LW1vZGFsXCI+PGltZyBzcmM9XCInICsgaHJlZiArICdcIj48L2Rpdj4nKTtcclxuICAgIFx0XHRcdCRvdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cImZhbmN5Ym94LW92ZXJsYXlcIj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCRib2R5LmFwcGVuZCgkb3ZlcmxheSk7XHJcbiAgICBcdFx0XHQkYm9keS5hcHBlbmQoJG1vZGFsKTtcclxuICAgIFx0XHRcdCRvdmVybGF5Lm9uZSgnY2xpY2snLCBoaWRlTW9kYWwpOyBcclxuICAgICAgICAgICAgICAgIHByZXNlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgIFx0XHR9XHJcblxyXG4gICAgXHRcdGZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcclxuICAgIFx0XHRcdCRtb2RhbC5oaWRlKCk7XHJcbiAgICBcdFx0XHQkb3ZlcmxheS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBwcmVzZW50ID0gZmFsc2U7XHJcbiAgICBcdFx0fVxyXG5cclxuXHJcbiAgICBcdFx0JGxpbmsub24oJ2NsaWNrJywgc2hvd01vZGFsKTtcclxuXHJcbiAgICBcdCAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuIFxyXG59KShqUXVlcnkpO1xyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbi8vIEpDQVJBVVNFTFxyXG5cclxuICAkKCcuamNhcm91c2VsJykuamNhcm91c2VsKHtcclxuICBcdCAgd3JhcDogJ2NpcmN1bGFyJ30pO1xyXG5cclxuICAgICAgICAgICQoJy5qY2Fyb3VzZWwtcHJldicpLmpjYXJvdXNlbENvbnRyb2woe1xyXG4gICAgICB0YXJnZXQ6ICctPTEnXHJcbiAgfSk7XHJcblxyXG4gICQoJy5qY2Fyb3VzZWwtcHJldicpLmpjYXJvdXNlbENvbnRyb2woe1xyXG4gICAgICB0YXJnZXQ6ICctPTEnXHJcbiAgfSk7XHJcblxyXG4gICQoJy5qY2Fyb3VzZWwtbmV4dCcpLmpjYXJvdXNlbENvbnRyb2woe1xyXG4gICAgICB0YXJnZXQ6ICcrPTEnXHJcbiAgfSk7XHJcblxyXG5cclxuICAkKCcuamNhcm91c2VsLXBhZ2luYXRpb24nKVxyXG5cclxuICAub24oJ2pjYXJvdXNlbHBhZ2luYXRpb246YWN0aXZlJywgJ2EnLCBmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSlcclxuICAub24oJ2pjYXJvdXNlbHBhZ2luYXRpb246aW5hY3RpdmUnLCAnYScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KVxyXG5cclxuICAkKCcuamNhcm91c2VsLXBhZ2luYXRpb24nKS5qY2Fyb3VzZWxQYWdpbmF0aW9uKHtcclxuICAgICAgaXRlbTogZnVuY3Rpb24ocGFnZSkge1xyXG4gICAgICAgICAgcmV0dXJuICc8YT48L2E+JztcclxuICAgICAgfVxyXG4gIH0pO1xyXG5cclxuICAgICQoJy5qY2Fyb3VzZWwnKS5qY2Fyb3VzZWxBdXRvc2Nyb2xsKHtcclxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgIHRhcmdldDogJys9MScsXHJcbiAgICAgIGF1dG9zdGFydDogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuLypGQU5DWUJPWCBJTklUKi9cclxuXHJcblxyXG4gICAgICAkKCdhLmZhbmN5Ym94JykuZmFuY3lib3goe1xyXG4gIH0pO1xyXG5cclxuXHJcbi8qIEFDQ09SRElPTiAgKi9cclxuXHJcbi8vIFN0YXJ0IGNvbmRpdGlvblxyXG5cclxuXHJcblxyXG52YXIgYWxsUGFuZWxzID0gJCgnLmJhbm5lcnNfX2FjY29yZGlvbiAgLmFjY29yZGlvbl9fY29udGVudCcpLmhpZGUoKTtcclxuICAgIFxyXG4gICQoJy5hY2NvcmRpb25fX2Jsb2NrJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgIFxyXG5cclxuICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWNjb3JkaW9uX19ibG9jay0tYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVVcCgzMDApO1xyXG4gICAgICAgJCh0aGlzKS5jaGlsZHJlbignLm9wZW5lcicpLmh0bWwoJysnKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCAnYWNjb3JkaW9uX19ibG9jay0tYWN0aXZlJyApO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgYWxsUGFuZWxzLm5vdCgkKHRoaXMpLm5leHQoKSkuc2xpZGVVcCgzMDApO1xyXG4gICAgJCgnLmFjY29yZGlvbl9fYmxvY2snKS5jaGlsZHJlbignLm9wZW5lcicpLmh0bWwoJysnKTtcclxuICAgICQoJy5hY2NvcmRpb25fX2Jsb2NrJykucmVtb3ZlQ2xhc3MoICdhY2NvcmRpb25fX2Jsb2NrLS1hY3RpdmUnICk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcub3BlbmVyJykuaHRtbCgnLScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcyggJ2FjY29yZGlvbl9fYmxvY2stLWFjdGl2ZScgKTtcclxuICAgICQodGhpcykubmV4dCgpLnNsaWRlRG93bigzMDApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB9KTtcclxuXHJcblxyXG4gICB9KTsiXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
