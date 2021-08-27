const TemperatureConverter = require('./temperatureConverter');

const tempConv = new TemperatureConverter();

test('celcius to fahrenheit conversion must be correct', () => {
  expect(tempConv.convert('celcius', 'fahrenheit', 10)).toBe(50);
});

test('celcius to reaumur conversion must be correct', () => {
  expect(tempConv.convert('celcius', 'reaumur', 10)).toBe(8);
});

test('fahrenheit to celcius conversion must be correct', () => {
  expect(tempConv.convert('fahrenheit', 'celcius', 50)).toBe(10);
});

test('fahrenheit to reaumur conversion must be correct', () => {
  expect(tempConv.convert('fahrenheit', 'reaumur', 50)).toBe(8);
});

test('reaumur to celcius conversion must be correct', () => {
  expect(tempConv.convert('reaumur', 'celcius', 8)).toBe(10);
});

test('reaumur to fahrenheit conversion must be correct', () => {
  expect(tempConv.convert('reaumur', 'fahrenheit', 8)).toBe(50);
});

test('invalid source temperature scale must throw error', () => {
  expect(() => tempConv.convert('random', 'fahrenheit', 8)).toThrow('Invalid source temperature scale');
});

test('invalid target temperature scale must throw error', () => {
  expect(() => tempConv.convert('reaumur', 'random', 8)).toThrow('Invalid target temperature scale');
});

test('invalid temperature scales must throw error', () => {
  expect(() => tempConv.convert('random', 'random', 8)).toThrow('Invalid temperature scales');
});

test('invalid temperature input must throw error', () => {
  expect(() => tempConv.convert('reaumur', 'celcius', '8')).toThrow('Invalid temperature input');
  expect(() => tempConv.convert('reaumur', 'celcius', NaN)).toThrow('Invalid temperature input');
});
