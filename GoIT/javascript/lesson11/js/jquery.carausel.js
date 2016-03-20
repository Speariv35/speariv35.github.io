(function($){
    $.fn.carousel = function(){
    $prev = $('.prev');
    $next = $('.next');
    var elemList = $('.carousel');

   var pixelsShift = 200;
   var leftPosition = 0;
   var carouselWidth = $('.hide').css('width');
 	var elementsCount = elemList.find('li').length;

	var minShift = -2000+600/*- (elementsCount - (carouselWidth / pixelsShift)) * pixelsShift);*/
   var maxShift = 0;

    $prev.click(function() {
    	 if (leftPosition != maxShift) {
    	 	$prev.removeClass("inactive");
    	 	$next.removeClass("inactive");
    		leftPosition += pixelsShift;
        elemList.animate({ left : leftPosition + "px"}, 500);
     }  else {
        $prev.addClass("inactive");
        }
    });
 
    $next.click(function() {
    	  if (leftPosition != minShift) {
    	  		$next.removeClass("inactive");
    	  		$prev.removeClass("inactive");
    			leftPosition -= pixelsShift;
        		elemList.animate({ left : leftPosition + "px"}, 500);
        } else {
        $next.addClass("inactive");
        }
    });
    return this;
    }
 
})(jQuery);