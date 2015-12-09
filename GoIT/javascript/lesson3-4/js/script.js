var app = {

  createElement: function(parameters) {
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

}


var body = document.querySelector('body');

app.createElement({
  tagName: 'h1',
  content: 'Тест по программированию',
  parentElement: body
});

var form = app.createElement({
  tagName: 'form',
  parentElement: body
});

for (var i = 0; i < 3; i++) {

      app.createElement({
        tagName: 'h2',
        content: 'Вопрос №' + (i + 1),
        parentElement: form
      });

      for (var j = 0; j < 3; j++) {

        var label = app.createElement({
          tagName: 'label',
          content: 'Вариант ответа №' + (j + 1),
          parentElement: form
        });

        var checkbox = app.createElement({
          tagName: 'input',
          inputType: 'checkbox'
        });

        label.insertAdjacentElement('afterBegin', checkbox);
      }
}

app.createElement({
  tagName: 'input',
  inputType: 'submit',
  value: 'Проверить мои результаты',
  parentElement: form
});
