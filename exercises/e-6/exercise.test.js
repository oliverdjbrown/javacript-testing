const { checkIfLeapYear } = require('./exercise.js');

test('determine whether a given year is a leap year in the Gregorian calendar', () => {
  const year1 = 2016;
  const year1ExpectedOutput = true;
  const year2 = 2022;
  const year2ExpectedOutput = false;
  expect(checkIfLeapYear(year1)).toBe(year1ExpectedOutput);
  expect(checkIfLeapYear(year2)).toBe(year2ExpectedOutput);
});
