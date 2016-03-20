$(() => {


  let html = $('#test').html();
  

 const question = [
  {
    question: '1. Есть такой код: ul li:first-letter {font-size: 200%;}. Что он делает?',
    answer: [
    'Делает первую букву у первого элемента в ненумерованном списке размером 200%.',
    'Делает первую букву у первого элемента в нумерованном списке размером 200%.',
    'Делает первую букву у каждого элемента ненумерованного списка размером 200%.'
    ],
    rightAnswer: {
        2:true
      }
  },
  {
    question: '2. Есть такой HTML-код: div id="myid" Содержимое. Как задать стиль для тега div ?',
    answer: [
    'div myid {margin: 1px;}',
    'div[myid] {margin: 1px;}',
    '#myid {margin: 1px;}',
    ],
    rightAnswer: {
        2:true
      }
  },
  {
    question: '3. Какое свойство используется для задания полей у блока?',
    answer: [
    'margin',
    'position',
    'padding',
    ],
    rightAnswer: {
        2:true
      }
  },
  ];

  let content = tmpl(html, {
  	data: question
  	});

  const [answerArray, manyAnswerArray, $body] = [[],[], $('body')];

  $body.append(content);



  function checkAnswer(e){
     const user = [];
    
    for (let i = 0; i < question.length; i++) {
      let inputs = $('.question' + i +' input:radio');
        for (let k = 0; k < inputs.length; k++) { 
           let checked = []; 
           let right = []; 

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

    let result = 0;
    for (let i = 0; i < user.length; i++) {
       if (user[i] == 1) {
         result += 1;
       };
    };


    const  $modal = $('<div class="modal"><p> ' + 'Результат: ' + result + ' верных ответа </p></div>');
    const  $overlay = $('<div class="overlay"></div>')

    $overlay.one('click', hideModal);
    $body.append($overlay);
    $body.append($modal);
};

  function hideModal(){
    
    $('.checkbox').removeAttr('checked');
    $('.modal').remove();
    $('.overlay').remove();
  }

  let check = $('.check');

  check.on('click', checkAnswer);
});