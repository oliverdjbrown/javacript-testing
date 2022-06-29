const { findIfDayWas1stJanuary } = require('./exercise.js');

test('determine whether a given year is January 1st', () => {
  const startYear = 2014;
  const endYear = 2050;
  const dayOfWeek = 0; // Sunday
  const expectedOutput = [2017, 2023, 2034, 2040, 2045];
  expect(findIfDayWas1stJanuary(startYear, endYear, dayOfWeek)).toEqual(
    expectedOutput
  );
});
