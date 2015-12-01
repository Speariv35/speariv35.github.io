function pow(x, y) {
  var result = 1;

  if (y >= 0) {
    for (var i = 0; i < y; i++) {
    result *= x;
  }
    return result;
  } else  {
    for (var i = 0; i > y; i--) {
    result *= x;
    }
    result = 1 / result;
    return result;
    }
}

var x = prompt('Input x ', x);
var y = prompt('Input y ', y);

alert( pow(x, y) );
console.log ('x pow y = ', pow(x, y))
