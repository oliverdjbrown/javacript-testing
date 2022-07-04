const { validateIsNumber } = require('./exercise.js');

test('Validate inputs are numbers', () => {
  const firstNumber = 1;
  const secondNumber = 2;
  const expectedOutput = true;
  expect(validateIsNumber(firstNumber, secondNumber)).toBe(expectedOutput);
});
