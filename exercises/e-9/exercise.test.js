const { calcDaysBetweenDates } = require('./exercise.js');

test('Calc days between days', () => {
  const startDate = '2022-06-29';
  const endDate = '2022-12-25';
  const expectedOutput = 179;
  expect(calcDaysBetweenDates(startDate, endDate)).toBe(expectedOutput);
});
