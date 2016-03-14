'use strict';

$(function () {

  var html = $('#test').html();

  var question = [{
    question: '1. Есть такой код: ul li:first-letter {font-size: 200%;}. Что он делает?',
    answer: ['Делает первую букву у первого элемента в ненумерованном списке размером 200%.', 'Делает первую букву у первого элемента в нумерованном списке размером 200%.', 'Делает первую букву у каждого элемента ненумерованного списка размером 200%.'],
    rightAnswer: {
      2: true
    }
  }, {
    question: '2. Есть такой HTML-код: div id="myid" Содержимое. Как задать стиль для тега div ?',
    answer: ['div myid {margin: 1px;}', 'div[myid] {margin: 1px;}', '#myid {margin: 1px;}'],
    rightAnswer: {
      2: true
    }
  }, {
    question: '3. Какое свойство используется для задания полей у блока?',
    answer: ['margin', 'position', 'padding'],
    rightAnswer: {
      2: true
    }
  }];

  var content = tmpl(html, {
    data: question
  });

  var answerArray = [];
  var manyAnswerArray = [];
  var $body = $('body');


  $body.append(content);

  function checkAnswer(e) {
    var user = [];

    for (var i = 0; i < question.length; i++) {
      var inputs = $('.question' + i + ' input:radio');
      for (var k = 0; k < inputs.length; k++) {
        var checked = [];
        var right = [];

        if (inputs[k].checked == true) {
          checked[k] = inputs[k].checked;
        }
        right[k] = question[i].rightAnswer[k] == 1;

        if (checked[k] !== right[k]) {
          user.push("0");
        } else {
          user.push("1");
        };
      };
    };

    var result = 0;
    for (var _i = 0; _i < user.length; _i++) {
      if (user[_i] == 1) {
        result += 1;
      };
    };

    var $modal = $('<div class="modal"><p> ' + 'Результат: ' + result + ' верных ответа </p></div>');
    var $overlay = $('<div class="overlay"></div>');

    $overlay.one('click', hideModal);
    $body.append($overlay);
    $body.append($modal);
  };

  function hideModal() {

    $('.checkbox').removeAttr('checked');
    $('.modal').remove();
    $('.overlay').remove();
  }

  var check = $('.check');

  check.on('click', checkAnswer);
});
