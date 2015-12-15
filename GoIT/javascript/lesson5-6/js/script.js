	var mseconds = 0;
	var seconds = '00';
	var minutes = '00';
	var hours = '00';
	started = 0;
	var timerId = setInterval("timer()", 1);


link = document.querySelector('.button');
link.addEventListener( "click" , startTimer);

function startTimer () {

	var linkStart = document.querySelector('.start-cont')
	started++;
	started = started % 2;
	if (started) {
		linkStart.innerHTML = 'Pause';
		linkStart.style.backgroundColor = '#33ad4a';
		// clearTimeout (timerId);
} else {
	 	linkStart.innerHTML = 'Cont..';
	 	linkStart.style.backgroundColor = '#2379bb';
	  }

}


linkClear = document.querySelector('.clear');
linkClear.addEventListener( "click" , clearTimer);

function clearTimer () {
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

function timer(){

if (started) {



if (mseconds < 10) {
		mseconds = '00' + mseconds;
	}
if (mseconds >= 10 & mseconds <100) {
		mseconds = '0' + mseconds;
	}

    document.querySelector('.time').innerHTML = hours + ':' + minutes + ':' + seconds;
    document.querySelector('.miliseconds').innerHTML = mseconds;
	 mseconds++;

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

 } else {
 	clearTimeout (timerId);
 }
}

setInterval(timer, 1)

