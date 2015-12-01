while (true) {

var x = prompt('Input x ', x);
var y = prompt('Input y ', y);

if ( ( (x != null) && (y != null) ) && ( (x != '') && (y != '') ) && ( (isNaN(x) != true) && (isNaN(y) != true) ) )  {
    break;
}
    alert ('Input correct  x  and y ! (numbers)');
}

alert( pow(x, y) );
console.log ('x pow y = ', pow(x, y))

function pow(x, y) {
  var result = 1;

  var absY = Math.abs(y);

  for (var i = 0; i < absY; i++) {
  result *= x;
}

  if (y >= 0) {
    return result;
  } else  {
    result = 1 / result;
    return result;
  }
}


