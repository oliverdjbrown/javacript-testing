//Declare functionality to be test it
const { week, extractTime } = require('./exercise.js');

test('Return day test', () => {
  expect(week[1]).toBe('Monday');
});

test('Return the current time from a date object', () => {
  const date = '2022-06-13T23:48:37.796Z';
  const expectedOutput = '19 : 48 : 37';
  expect(extractTime(date)).toBe(expectedOutput);
});
