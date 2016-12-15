var pow = require('../js/pow.js');

describe("Test", function() {

  it("pow() test 2^3", function() {
    expect(pow(2,3)).toBe(8);
  });

  it("pow() test 7^1", function() {
    expect(pow(7,1)).toBe(7);
  });

  it("pow() test 6^empty", function() {
    expect(pow(6,'')).toBe('Необходимо ввести числовое значение выполнение прекращено');
  });

});
