const Calculator = require('./calculator');

const calc = new Calculator();

test('sum of two numbers', () => {
  expect(() => calc.operate('sum', 8, 4)).not.toThrow();
  expect(calc.operate('sum', 8, 4)).toBe(12);
});

test('substraction of two numbers', () => {
  expect(() => calc.operate('substract', 8, 4)).not.toThrow();
  expect(calc.operate('substract', 8, 4)).toBe(4);
});

test('multiplication of two numbers', () => {
  expect(() => calc.operate('multiply', 8, 4)).not.toThrow();
  expect(calc.operate('multiply', 8, 4)).toBe(32);
});

test('division of two numbers', () => {
  expect(() => calc.operate('divide', 8, 4)).not.toThrow();
  expect(calc.operate('divide', 8, 4)).toBe(2);
});

test('invalid operator must be throw error', () => {
  expect(() => calc.operate('nothing', 8, 4)).toThrow();
  expect(() => calc.operate('nothing', 8, 4)).toThrow('Invalid operator');
});
