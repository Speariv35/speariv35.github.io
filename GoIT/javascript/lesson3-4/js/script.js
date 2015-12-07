var testForm = {
 	createForm: function () {
 		var element = document.createElement('form');
		element.classList.add('form');
		element.innerHTML = '<h3>Тест по программированию</h3>';
		var link = document.body;
		link.appendChild(element);
 	},

 	createUl: function (object, i) {
 		var object;
 		var element = document.createElement('ul');
		element.classList.add('nav-stacked');
		var link = document.querySelectorAll('.'+object);
  		link[i].appendChild(element);
},

 	createLi: function (elem, text) {
 		var text;
 		var element = document.createElement('li');
		var link = document.querySelector('.' + elem);
		element.classList.add('list-title');
		link.appendChild(element);
		element.innerHTML = i + '. ' + text + i;
 	},

 	createUlLi: function (elem, ElemInColection) {
 		var element = document.createElement('li');
		var link = document.querySelectorAll('.' + elem);
		element.classList.add('list-title');
		link[ElemInColection].appendChild(element);
 	},

   createInputLabel: function (elem, text, ElemInColection) {

   var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.name = "name";
	checkbox.value = "value";
	checkbox.id = "id";
	var label = document.createElement('label')
	label.htmlFor = "id";
	label.appendChild(document.createTextNode(text + (i+1) ) );

	var link = document.querySelectorAll('.' + elem);

	link[ElemInColection].appendChild(checkbox);
	link[ElemInColection].appendChild(label);

   }




/*	createUL: function () {
	var element = document.createElement('li');
	var link = document.querySelector('.nav-stacked');
	link.appendChild(element);
	element.innerHTML = '<h5>Вопрос№</h5>' + i;
 	}*/
 }


 testForm.createForm ();

 testForm.createUl ('form', 0);

 for (var i = 1 ; i <= 3; i++) {
 	testForm.createLi ('nav-stacked', 'Вопрос №');
 };

 var number = document.querySelectorAll('.list-title').length;
 for (var i = 0; i < number; i++) {
 	testForm.createUl ('list-title', i);
 };


for (var j = 0; j < 3; j++) {
	for (var i = 1 ; i <= 3; i++) {
 	testForm.createUlLi ('nav-stacked .nav-stacked', j);
 }
};
 
// for (var k = 0; k < 3; k++) {
	for (var i = 0, j=0 ; i,j < 3; i++, j++) {
	 testForm.createInputLabel ('nav-stacked .nav-stacked .list-title', 'Вариант ответа №', j );
	// }
};
 

