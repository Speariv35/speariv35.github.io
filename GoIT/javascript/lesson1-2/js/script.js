function pow(x, y) {
  var result = x;

  if (y > 0) {
    for (var i = 1; i < y; i++) {
    result *= x;
  }
    return result;
  } else if (y < 0) {
    for (var i = -1; i > y; i--) {
    result *= x;
}
    result = 1 / result;
    return result;
  }
  else {
    result = 1;
    return result;
  }

}

var x = prompt('Input x ', x);
var y = prompt('Input y ', y);


alert( pow(x, y) );
console.log ('x pow y = ', result)
