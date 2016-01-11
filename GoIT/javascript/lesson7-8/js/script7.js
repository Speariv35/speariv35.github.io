

$(function () {

//Tab1
	$('.tab-1').on('click', function(){
		show('.tab-1', '.txt1');
	});
//Tab2
	$('.tab-2').on('click', function(){
		show('.tab-2', '.txt2');
	});
//Tab 3
	$('.tab-3').on('click', function(){
		show('.tab-3', '.txt3');
	});

function show(tab, tabtxt){
	$(tabtxt).css("display", "block");
	$(tab).css({
		background: 'white'
	});		
	$(".tab").not($(tabtxt)).css("display", "none");
	$("li").not($(tab)).css({
			background: '#ccc'
	});

}
	})




