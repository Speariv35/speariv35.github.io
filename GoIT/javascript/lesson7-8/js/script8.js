	$(function(){

visible = false;
var n=0;

	function hideHelp(name){
	  $('.'+name).remove();
	}

function showHelp(id, parent, child){
		titles = $(id).attr('title');
		$(parent).append('<span class = "help"></span>');
		var ch = $('.help').eq(n).addClass(child);
		$(ch).text(titles);
		n++;
	}

function showAllHelp(){
	   visible = true;
	   n=0;
		showHelp('#first-name', '.fname-wrapper', 'fname-help');
		showHelp('#last-name', '.lname-wrapper', 'lname-help');
		showHelp('#address', '.addr-wrapper', 'addr-help');
	}

function hideAllHelp(){	
	$('.fname-help').remove();
	$('.lname-help').remove();
	$('.addr-help').remove();
	visible = false;
}


$('#first-name').on({
    mouseenter: function() {
    n=0;
    hideAllHelp()
    showHelp('#first-name', '.fname-wrapper', 'fname-help');
  }, mouseleave: function() {
    hideHelp('fname-help');
  }
});

$('#last-name').on({
     mouseenter: function() {
     	n=0;
     	hideAllHelp()
     	showHelp('#last-name', '.lname-wrapper', 'lname-help');
  }, mouseleave: function() {
    hideHelp('lname-help');
  }
});

$('#address').on({
     mouseenter: function() {
     	n=0;
     	hideAllHelp()
    showHelp('#address', '.addr-wrapper', 'addr-help');
  }, mouseleave: function() {
    hideHelp('addr-help');
  }
});

$('.show-all').on('click', function(){
	event.preventDefault();
	if(!visible)
			showAllHelp();
		n=0;
		})

	});