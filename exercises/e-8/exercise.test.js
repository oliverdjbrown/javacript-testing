const { validations } = require('./exercise.js');

test('Validate if character is a number', () => {
  const input = 'string';
  const expectedOutput = 'the character must be a number';
  expect(validations(input)).toEqual(expectedOutput);
});

test('Validate if number is lower than zero', () => {
  const input = -1;
  const expectedOutput = 'the number cannot be lower or equal to zero';
  expect(validations(input)).toEqual(expectedOutput);
});

test('Validate if number is bigger than 10', () => {
  const input = 11;
  const expectedOutput = 'the number cannot be bigger than 10';
  expect(validations(input)).toEqual(expectedOutput);
});
