var pow = require('../js/src/jasmine/testJasmine.js')

describe("Pow.math method", function() {
  it("Pow.math method", function() {

  	var res1;

  	result1 = pow.powNow(2,3);

    expect(res1).toBe(8);
  });
});

describe("Pow.math method", function() {
  it("Pow.math method", function() {

  	var res2;

  	res2 = pow.powNow(2,1);

    expect(res2).toBe(2);
  });
});

describe("Pow.math method", function() {
  it("Pow.math method", function() {
  	var res3;

  	res3 = pow.powNow(2,5);

    expect(res3).toBe(32);
  });
});