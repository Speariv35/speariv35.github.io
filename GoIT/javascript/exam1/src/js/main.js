
/*
 * Custom
 */
//= partials/app.js



(function($) {


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

	(function(){
	var images = {
		
		photos: [
		"img/gallery_1.jpg",
		"img/gallery_2.jpg",
		"img/gallery_3.jpg",
		"img/gallery_4.jpg",
		"img/gallery_5.jpg",
		"img/gallery_6.jpg",
		"img/gallery_7.jpg"
		],
		word: 'Choose your activity'
	}

	var inputActivity = document.querySelector('.activity-form__input');
	var formActivity = document.querySelector('.activity-form');

	function getImagesByRequest() {
			images.photos = [];
			var wordArr = images.word.split(" ");
			var requestStr = 'https://pixabay.com/api/?key=2223288-d10240586d6b3acc79b68cd15&q=';
			wordArr.forEach(function(word, i) {
				(i != 0) ? requestStr = requestStr + '+' + word : requestStr = requestStr + word;
			});
			requestStr = requestStr + '&image_type=photo';

			function successFunc(data) {
					var i = 0;
					while(i < 7) {
						images.photos.push(data.hits[i].webformatURL);
						i++;
					}
						render();
						IsotopeInit();
				}

			var promise = $.ajax({
				url: requestStr
			});
			promise.done(successFunc);
	}

	//GET IMAGES BY REQUEST
	function getUserQuery(event) {
		event.preventDefault();
		images.word = inputActivity.value;
		getImagesByRequest();

  
	}

		// ISOTOPE
	function IsotopeInit() {
		var elem = document.querySelector('.activity');
		var iso = new Isotope( elem, {
		itemSelector: '.activity__link',
		transitionDuration: '0.8s',
		masonry: {
			columnWidth: ".activity__sizer",
			gutter: '.activity__sizer',
			gutter: 10,
			isFitWidth: true,
			percentPosition: true
			}
		});
	}

	function render() {
		var source = $("#image-tmpl").html();
		var template = Handlebars.compile(source);
		var html = template(images);
		var element = document.querySelector('.activity');
		element.innerHTML = html;
	}

	function init() {
		render();
		IsotopeInit();
		formActivity.addEventListener('submit', getUserQuery);
	}

	document.addEventListener('DOMContentLoaded', init);
})();


})(jQuery);




