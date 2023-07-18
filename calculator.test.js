const { Calculator } = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      expect(calculator.add(-5, 3)).toBe(-2);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    // Write subtract tests here
  });

  describe('multiply', () => {
    // Write multiply tests here
  });

  describe('divide', () => {
    // Write divide tests here
  });
});
