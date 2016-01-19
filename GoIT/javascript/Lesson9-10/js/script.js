
  $(function() {

// DROP DOWN

  var showDropdown = function () {
    $(this).children('.sub_menu')
      .show(200)
      .animate({
        backgroundColor: "#ccc",
      }, 200)
    ;
  };

  var hideDropdown = function () {
    $(this).children('.sub_menu')
      .hide(200)
      .animate({
        backgroundColor: "#ccc",
      }, 200)
    ;
  };

  $('li.main_dropdown').hover( showDropdown, hideDropdown );

  var changeColor = function () {
    $(this).animate({
      color: 'blue',
       backgroundColor: "#aa0000"
    }, 100);
  };

  var changeColorBack = function () {
    $(this).animate({
      color: 'green',
      backgroundColor: "#ccc"
    }, 100);
  };

  $('.sub_menu--link').hover( changeColor, changeColorBack );

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
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });

    $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  });




  $('input.jq-chkbx').prettyCheckable({
    color: 'red'
  });


var ddBasic = [
    { text: "Facebook", value: 1, },
    { text: "Twitter", value: 2, },
    { text: "LinkedIn", value: 3, },
    { text: "Foursquare", value: 4, }
];



/*Ddslick   */

$('#divNoImage').ddslick({
    data: ddBasic,
    selectText: "Select your favorite social network"
});

    });





