
/*
 * Custom
 */


//= partials/app.js



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