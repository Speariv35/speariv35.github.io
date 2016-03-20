while (true) {

var x = prompt('Input x:');

if ( (x != null) && (x != '') && (isNaN(x) != true) )  {
    break;
}
    alert ('Input correct  x ! (number)');
}

while (true) {

var y = prompt('Input y:');

if ( (y != null) && (y != '') && (isNaN(y) != true) )  {
    break;
}
    alert ('Input correct  y ! (number)');
}

alert( pow(x, y) );
console.log ('x pow y = ', pow(x, y))


//  Function x^y 


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


