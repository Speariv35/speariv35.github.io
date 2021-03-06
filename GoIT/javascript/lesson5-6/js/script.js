
	/* Global variables              */

	var mseconds = 0;
	var seconds = '00';
	var minutes = '00';
	var hours = '00';
	started = 0;

	/* Creating markup              */

   function createElement (parameters) {
    var element = document.createElement(parameters.tagName);

    if (parameters.inputType){
      element.setAttribute('type', parameters.inputType);
    }

    if (parameters.className){
      element.className = parameters.className;
    }

    if (parameters.content){
      element.innerHTML = parameters.content;
    }

    if (parameters.parentElement){
      parameters.parentElement.appendChild(element);
    }

     if (parameters.value){
      element.value = parameters.value;
    }

    return element;
  }



var body = document.querySelector('body');

createElement({
  tagName: 'div',
  className: 'timer',
  parentElement: body
});

var timerdiv = document.querySelector('.timer');

createElement({
  tagName: 'p',
  content: '00:00:00',
  className: 'time',
  parentElement: timerdiv
});

createElement({
  tagName: 'p',
  content: '000',
  className: 'miliseconds',
  parentElement: timerdiv
});

createElement({
  tagName: 'div',
  content: 'Start',
  className: 'start-cont',
  parentElement: timerdiv
});

createElement({
  tagName: 'div',
  content: 'Clear',
  className: 'clear',
  parentElement: timerdiv
});


/* Button Start, Continue    */

link = document.querySelector('.start-cont');
link.addEventListener( "click" , startTimer);

function startTimer () {

	var linkStart = document.querySelector('.start-cont')
	started++;
	started = started % 2;
	if (started) {
		timerId = setInterval("timer()", 1);
		linkStart.innerHTML = 'Pause';
		linkStart.style.backgroundColor = '#33ad4a';
} else {
		clearInterval(timerId);
	 	linkStart.innerHTML = 'Cont..';
	 	linkStart.style.backgroundColor = '#2379bb';
	  }

}

/* Button Clear     */

linkClear = document.querySelector('.clear');
linkClear.addEventListener( "click" , clearTimer);

function clearTimer () {
	clearInterval(timerId);
	var linkStart = document.querySelector('.start-cont')
   linkStart.innerHTML = 'Start';
	linkStart.style.backgroundColor = '#33ad4a';

	document.querySelector('.time').innerHTML = '00:00:00';
   document.querySelector('.miliseconds').innerHTML = '000';

   mseconds = 0;
	seconds = '00';
	minutes = '00';
	hours = '00';
	started = 0;
}

/* Timer logic */

function timer(){
if (mseconds < 10) {
		mseconds = '00' + mseconds;
	}
if (mseconds >= 10 & mseconds <100) {
		mseconds = '0' + mseconds;
	}

    document.querySelector('.time').innerHTML = hours + ':' + minutes + ':' + seconds;
    document.querySelector('.miliseconds').innerHTML = mseconds;
	 mseconds = +mseconds + 4;

	if (mseconds === 1000) {
		mseconds = 0;
		seconds++;
		if (seconds < 10) {
		seconds = '0' + seconds;
	}
	}

    if (seconds === 60) {
		seconds = '00';

		minutes++;
		if (minutes < 10) {
		minutes = '0' + minutes;
	}
	}

	  if (minutes === 60) {
		minutes = '00';
		hours++;
		if (hours < 10) {
	hours = '0' + hours;
 }
}

} 



