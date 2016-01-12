

  $(function() {
        $('.jcarousel').jcarousel({
        	  wrap: 'circular'});

          $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
      target: '+=1'
  });

  $('.jcarousel-pagination').jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });

    $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  });

    });