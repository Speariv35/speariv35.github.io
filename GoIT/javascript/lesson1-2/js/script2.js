
var arr = [], name, login, i;

for ( i = 5; i > 0; i--) {
	while (true) {
	arr[i] = prompt('Input name of your users (' + i + ' users left): ');
	if  ( (arr[i] != null) && (arr[i] != '') ) {
		break;
	}
	alert ('Input correct username!!!');
	} 
}

login = prompt ('Input login to check', login);

var sucsess = false;

for ( i = 0; i < arr.length; i++) {
	if (login == arr [i]) {
		sucsess = true;
		break;
	} 
}

if (sucsess) {
	alert (login + ', your login successful');
} else  {
	alert ('No such user ' + login + ' !!!')
}

