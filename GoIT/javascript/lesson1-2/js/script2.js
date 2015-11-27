
var arr = [];
var length;
var name;
var login;

length = prompt ('Enter number of users in your network', length);

length = parseInt(length);

if (length > 0) {
var arrLength = length;

i=0;

while (length != 0) {
	arr[i] = prompt ('Input name of your users (' + length + ' users left): ', name);
	length--;
	i++;
}

login = prompt ('Input login to check', login);

sucsess = 0;

for ( i = 0; i < arr.length; i++) {
	if (login == arr [i]) {
		sucsess++;
	} 
}

if (sucsess > 0) {
	alert (login + ', your login successful');
}
else	{
	alert ('No such user !!!')
}

} else {
	alert ('You have enter wrong number of users');
}