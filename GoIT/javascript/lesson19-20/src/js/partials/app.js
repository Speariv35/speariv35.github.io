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