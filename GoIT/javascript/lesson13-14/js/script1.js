'use strict';
    var questions = {
    '1': {
        'title': 'Есть такой код: ul li:first-letter {font-size: 200%;}. Что он делает?',
        'answers': [
            'Делает первую букву у первого элемента в ненумерованном списке размером 200%.',
            'Делает первую букву у первого элемента в нумерованном списке размером 200%.',
            'Делает первую букву у каждого элемента ненумерованного списка размером 200%.'
            
        ],
        'check': 2
        },
    '2': {
        'title': 'Есть такой HTML-код: <div id="myid">Содержимое</div>. Как задать стиль для тега',
        'answers': [
           'div #myid {margin: 1px;}',
           'div[myid] {margin: 1px;}',
           '#myid {margin: 1px;}',
        ],
        'check':2
        },
    '3': {
        'title': 'Какое свойство используется для задания полей у блока?',
        'answers': [
            'margin',
            'padding',
            'position',
            
        ],
        'check':1
       },
}
   
    var temp={};

       for (var key in questions){

          localStorage.setItem('answersAndQuestion[key]', JSON.stringify(questions[key]));      //записали в localStorage
          temp[key] = localStorage.getItem('answersAndQuestion[key]');                        //вытащили из localStorage
          temp[key] = JSON.parse(temp[key]);
       }
 
    var htmlka = $('#test').html();
    var content = tmpl(htmlka, temp);  //сгенерировали контент
        $('[type=submit]').before(content);         //вставили перед кнопкой

 
    //только один checkbox
    $('.checkbox').on('click', change);
    
      function change(){
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
      }

    //событие на кнопку
    var submit = $('input[type="submit"]');
        submit.one('click', checking);
   
    //проверка ответов
      function checking(){
        var answersBlock = $('.answersBlock');
        var checkedAnswers=[];        //массив для отмеченных ответов
          $('.answersBlock input:checkbox:checked').each(function(){
              var id = $(this).attr('id');
              var numberOfQuestion = id.substr(0,1); //узнали номер вопроса
              var index = +numberOfQuestion-1;
              var numberOfAnswer = id.substr(2);// узали номер ответа (первый, второй или третий)
              checkedAnswers[index] = +numberOfAnswer;  
          });
              console.log(checkedAnswers);
       
          var arrResult =[]; //  массив с результатом теста для пользователя
            for(var j=0; j<answersBlock.length; j++){
                console.log('Правильный ответ:', temp[j+1].check);
              if(checkedAnswers[j]){ // если был отмеченным ответ на вопрос, то сравниваем
                  var check = temp[j+1].check;// достали правильный ответ из начального объекта
                  if (checkedAnswers[j] === check){ //сравнили
                    arrResult[j]='<span style="color:green">Правильный ответ!</span>';
                  } else{ arrResult[j]='Не правильный ответ!';
                    }
              } else {
                  arrResult[j]='Не правильный ответ!'; // если не было галочки, значит ошибка!
                }     
            }//for

      event.preventDefault();
      var modal = $('<div class="modal"><h3>Результаты теста</h3></div>');
      var wrapper = $('.wrapper');
          wrapper.append(modal); // формируем модальное окно с результатами
      
          for (var z=0; z<answersBlock.length; z++){
               var questionDiv = $('<div class="questionTitle">'+(z+1)+'.'+temp[z+1].title+'</div>');
               modal.append(questionDiv);
               var answerDiv = $('<div class="answer warning">'+arrResult[z]+'</div>');
               modal.append(answerDiv);
          }
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".modal"); 
    
    if (!div.is(e.target)&& div.has(e.target).length === 0) { 
      div.hide; // скрываем его
      location.reload();
    }
  });
    
    }//function 'checking'