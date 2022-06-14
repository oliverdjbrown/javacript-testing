//Declare functionality to be test it
const { week, extractTime } = require('./exercise.js');

test('Return day test', () => {
  expect(week[1]).toBe('Monday');
});

test('Return the current time from a date object', () => {
  const date = '2022-06-14T02:18:51.807Z';
  const expectedOutput = '10 PM : 18 : 51';
  expect(extractTime(date)).toBe(expectedOutput);
});
