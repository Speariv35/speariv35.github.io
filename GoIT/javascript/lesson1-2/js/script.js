var a;
var b;
var sum;

a = prompt ('Input number', a);
b = prompt ('Input pow', b);
var num = parseInt(a);
var pow = parseInt(b);

sum = num;

if (pow == 0) {
	 sum = 1;
    alert ('Number '+ a +' in pow '+ b + ' = '+ sum);
    console.log ('Result', sum)
}
else if (pow < 0) {
		while (pow != -1) {
        sum = sum / num;
        pow++;
    }
    alert ('Number '+ a +' in pow '+ b +' = '+ sum);
    console.log ('Result', sum)
}
else {
    while (pow != 1) {
        sum = sum * num;
        pow--;
    }
    alert ('Number '+ a +' in pow '+ b +' = '+ sum);
    console.log ('Result', sum)
}

