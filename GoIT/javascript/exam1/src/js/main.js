
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

	var inputIdeas = document.querySelector('.ideas-form__input');
	var formIdeas = document.querySelector('.ideas-form');
	var img = {
		
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

	

	function getImages() {
			img.photos = [];
			var wordArr = img.word.split(" ");
			var requestStr = 'https://pixabay.com/api/?key=2223288-d10240586d6b3acc79b68cd15&q=';
			wordArr.forEach(function(word, i) {
				(i != 0) ? requestStr = requestStr + '+' + word : requestStr = requestStr + word;
			});
			requestStr = requestStr + '&image_type=photo';

			function formImgArray(data) {
					var i = 0;

					while(i < 7) {
						img.photos.push(data.hits[i].webformatURL);

						i++;
					}
						render();
						initIsotope();
				}

			var request = $.ajax({
				url: requestStr
			});
			request.done(formImgArray);
	}

	
	function getUserQuery(event) {
		event.preventDefault();
		img.word = inputIdeas.value;
		getImages();

  
	}


	function initIsotope() {
		var elem = document.querySelector('.ideas');
		var isoProt = new Isotope( elem, {
		itemSelector: '.ideas__link',
		transitionDuration: '0.6s',
		masonry: {
			columnWidth: ".ideas__sizer",
			gutter: '.ideas__sizer',
			gutter: 10,
			isFitWidth: true,
			percentPosition: true
			}
		});
	}

	function render() {
		var source = $("#image-tmpl").html();
		var template = Handlebars.compile(source);
		var html = template(img);
		var element = document.querySelector('.ideas');
		element.innerHTML = html;
	}

	function firstInit() {
		render();
		initIsotope();
		formIdeas.addEventListener('submit', getUserQuery);
	}

	document.addEventListener('DOMContentLoaded', firstInit);



/*FANCYXBOX INIT*******************************************/

		
		$(".fancybox").fancybox();
	

})();



})(jQuery);




