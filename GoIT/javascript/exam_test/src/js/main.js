
/*
 * Custom
 */

//= partials/app.js

//= vendor/tmpl.js

//= vendor/isotope.pkgd.min.js


(function($) {

	$(function() {

		$('.jcarousel').jcarousel({
			animation: 'slow',
			wrap: 'circular'
		})

		.jcarouselAutoscroll({
			interval: 5000,
			target: '+=1',
			autostart: true
		});

		$('.jcarousel-control-prev')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.jcarouselControl({
				target: '-=1'
			});

		$('.jcarousel-control-next')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.jcarouselControl({
				target: '+=1'
			});

		});	


/*SHOW MORE PARTNERS SLIDER*****************************************************************/

			var opened = false;

			function showMorePartners (e) {
				e.preventDefault();

				
				var $partners = $('.hidden');

				if (opened) {

					opened = false;
					
					$partners.slideUp();
					$('.button-partners').html('See other partners'); 

				} else {
					opened = true;
					$partners.slideDown();
					$('.button-partners').html('Hide more partners');
				}
			}

			$('.button-partners').on("click", showMorePartners);


/** MASONRY*****************************************************************/

		var imageQuery = '';

		function renderList(imageQuery) {

			$.ajax({
				type: "GET",
				dataType: "json",
				cache: false,
				url: 'http://api.pixplorer.co.uk/image?word=' + imageQuery + '&amount=7&size=s',
				success: function(data) {
					
					var imageObject = tmpl($('#grid-tmpl').html(), data);

					$('.grid').remove();

					$('.ideas .wrapper').append(imageObject);


					$('.grid').isotope({
						itemSelector: '.grid-item',
						layoutMode: 'masonry',
						masonry: {
							gutter: 20
						}


					});

				}
			});
		}

		$('#search-image').submit(function(e) {

			e.preventDefault();
			var query = encodeURIComponent($('.search__input').val());
			renderList(query);

		});

		renderList();
	

})(jQuery);




