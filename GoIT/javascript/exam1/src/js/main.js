

(function(){

//= partials/app.js

//= vendor/tmpl.js

//= vendor/jquery.xdomainrequest.min.js


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
		word: ''
	};
	

	var inputIdeas = document.querySelector('.ideas-form__input');
	var formIdeas = document.querySelector('.ideas-form');

	function getImages() {
			img.photos = [];
			
			var requestStr = 'https://pixabay.com/api/?key=2274289-63e61f648f1611a12b2cef1cf&q='+ img.word + '&image_type=photo';
			var firstTimeInit = false;

			function formFirstImgArray(data) {
				console.log(data);
					var i = 0;
					while(i < 7) {

						function getRandomArbitary(min, max) {
						  return Math.random() * (max - min) + min;
						}

						var k = getRandomArbitary(0, 19);
						k = Math.round(k);
						img.photos.push(data.hits[k].webformatURL);
						img.word.push(data.hits[k].tags);

						i++;
					}
						render();
						initIsotope();
				}

				function formImgArray(data) {
				console.log(data);

					var i = 0;
					while(i < 7) {

						function getRandomArbitary(min, max) {
						  return Math.random() * (max - min) + min;
						}

						var k = getRandomArbitary(0, 19);
						k = Math.round(k);
						img.photos.push(data.hits[k].webformatURL);
						i++;
					}
						render();
						initIsotope();
				}

			var request = $.ajax({
				url: requestStr
			});

			if (firstTimeInit) {
				request.done(formFirstImgArray);
			}

			request.done(formImgArray);
	}

	
	function getUserQuery(event) {
		event.preventDefault();
		img.word = inputIdeas.value;
		getImages();

  
	}


	function initIsotope() {
		var elem = document.querySelector('.ideas');
		var isotopeInst = new Isotope( elem, {
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
		var templateStr = $('#image-tmpl').html();
		var template = tmpl(templateStr,  {
                    img: img
                } );
		var element = document.querySelector('.ideas');
		element.innerHTML = template;

	}

	function firstInit() {
		getImages();
		formIdeas.addEventListener('submit', getUserQuery);
	}




	document.addEventListener('DOMContentLoaded', firstInit);

/*SIGNUP MODAL WINDOW*************************************************************************************/
	
    		var $body = $('body');
    		var $modal;
    		var $overlay;
            var present = false;

				function showModal(e) {
                e.preventDefault();

                if (!present) {
    			$modal = $('<div class="main"> 	<div class="social-icons"><div class="col_1_of_f span_1_of_f"><a href="#"> <ul class="facebook"><i class="fb"> </i><li>Connect with Facebook</li><div class="clear"> </div></ul></a></div><div class="col_1_of_f span_1_of_f"><a href="#"><ul class="twitter"><i class="tw"> </i><li>Connect with Twitter</li><div class="clear"> </div></ul></a></div><div class="clear"> </div></div><h2 class="signup-text">Or Signup with</h2><form> <div class="lable"><div class="col_1_of_2 span_1_of_2"><input type="text" class="text" placeholder="First Name" "></div><div class="col_1_of_2 span_1_of_2"><input type="text" class="text" placeholder="Last Name"></div><div class="clear"> </div></div><div class="lable-2"><input type="text" class="text" placeholder="your@email.com " > <input type="password" class="text" placeholder="Password " ></div><h3>Bycreating an account, you agree to our <span class="term"><a href="#">Terms & Conditions</a></span></h3><div class="submit"><input type="submit"></div><div class="clear"> </div></form></div>');
    			$overlay = $('<div class="signup-overlay"></div>');

                e.stopPropagation();
				
				$body.append($overlay);
    			$body.append($modal);
    			$overlay.one('click', hideModal); 
    			$('.submit input').one('click', hideModal);
                present = true;
            } 
        }
    		function hideModal() {
    			$modal.hide();
    			$overlay.hide();
                present = false;
    		}


    		$(".header-top__sign-up").on('click', showModal);
    		$(".header-top__login").on('click', showModal);

/*FANCYXBOX INIT**************************************************************************************/

		
		$(".fancybox").fancybox();


})();







