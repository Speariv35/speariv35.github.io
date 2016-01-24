'use strict';

/*DATA FOR TEST*/

var testData = [{
		question: '1. Есть такой код: ul li:first-letter {font-size: 200%;}. Что он делает? ',
		option1: 'Делает первую букву у первого элемента в ненумерованном списке размером 200%.',
		option2: 'Делает первую букву у первого элемента в нумерованном списке размером 200%.',
		option3: 'Делает первую букву у каждого элемента ненумерованного списка размером 200%.'
	},
	{
		question: '2. Есть такой HTML-код: <div id="myid">Содержимое</div>. Как задать стиль для тега <div>?',
		option1: 'div #myid {margin: 1px;}',
		option2: 'div[myid] {margin: 1px;}',
		option3: '#myid {margin: 1px;}',
	},
	 {
		question: '3. Какое свойство используется для задания полей у блока?',
		option1: 'margin',
		option2: 'position',
		option3: 'padding',
	}];

var testAnswers = {
	answer1: 'Делает первую букву у каждого элемента ненумерованного списка размером 200%.',
	answer2: {
		rigth1: 'div#myid {margin: 1px;}',
		right2: '#myid {margin: 1px;}'
	},

	answer3: 'padding',
}

/*WRITE TO LOCAL STORAGE*/

var testDataStr = JSON.stringify(testData);
var testAnswersStr = JSON.stringify(testAnswers);

console.log('JSON Data', testDataStr);
console.log('JSON Answers', testAnswersStr);

localStorage.setItem('testData', testDataStr);
localStorage.setItem('testAnswers', testAnswersStr);

/*READ FROM LOCAL STORAGE*/

var testDataJSON = localStorage.getItem('testData');
var testAnswersJSON = localStorage.getItem('testAnswers');

var testDataObj = JSON.parse(testDataJSON);
var testAnswersObj = JSON.parse(testAnswersJSON);

console.log ('Restore from LS', testDataObj);
console.log ('Restore from LS', testAnswersObj);

/*CREATE DOM FROM TEMPLATE*/

$(function(){

	var test_tmpl = $('#test_tmpl').html();
	var template = _.template(test_tmpl);
	
	var insert = template({
  data: testDataObj
});
	$('body').append(insert);

/*CHECK RIGHT ANSWERS*/


 var $answers = $('input:checkbox:checked #q1answ3');

function checkAnswer(e) {
	e.preventDefault;
	if (testAnswersObj.answer1 = $($answers).eq(0).html()) {
		alert ('Ok');
		alert ('$answers', $($answers).html());
		alert ('Right', testAnswersObj.answer1);
	} else {
		alert ('Wrong');
}};


$('.check-result').on('click', checkAnswer);
 
















});


