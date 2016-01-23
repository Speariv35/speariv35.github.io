$(function(){

	var cv_tmpl = $('#cv_tmpl').html();
	var tmpl = _.template(cv_tmpl);
	

	var info = {
		name: 'Костенко Константин Сергеевич',
		imgLink: 'Spear.png',
		jobTitle: 'Cистемный администратор на Hromadske.tv',
		opinion: [
			'Хочу поменять профессию',
			'Зарплата привязана к доллару',
			'Постоянное что то новое',
		],
		phone: '+380982088988',
		fbLink: 'https://www.facebook.com/kostiantyn.kostenko',
		feedback: 'Могу собрать онлайн-телеканал, если надо ...',
	}
	

	var insert = tmpl(info);
	$('body').append(insert);
});