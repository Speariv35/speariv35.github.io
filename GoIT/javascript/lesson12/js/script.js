$(function() {

	var html = $('#test').html();
	var data = {
			name: 'Костенко Константин Сергеевич',
			imgLink: 'Spear.png',
			jobTitle: 'Cистемный администратор на Hromadske.tv',
			opinion1: 'Хочу поменять профессию',
			opinion2: 'Зарплата привязана к доллару',
			opinion3: 'Постоянное что то новое',
			phone: '+380982088988',
			fbLink: 'https://www.facebook.com/kostiantyn.kostenko',
			feedback: 'Могу собрать онлайн-телеканал, если надо ...',
	};

	var content = tmpl(html, data);

	$('body').append(content);

});

