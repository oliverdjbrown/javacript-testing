const {
  convertToCelsius,
  convertToFahrenheit,
  validateIsNumber,
} = require('./exercise.js');

test('Validate inputs are numbers', () => {
  const number = 100;
  const expectedOutput = true;
  expect(validateIsNumber(number)).toBe(expectedOutput);
});

test('Validate Farenheit to Celcius convertion', () => {
  const number = 100;
  const expectedOutput = 212;
  expect(convertToCelsius(number)).toEqual(expectedOutput);
});

test('Validate Celsius to Farenheit convertion', () => {
  const number = 100;
  const expectedOutput = 82.22222222222223;
  expect(convertToFahrenheit(number)).toEqual(expectedOutput);
});
