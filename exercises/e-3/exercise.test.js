const { formatCurrentDate } = require('./exercise.js');

const testDate = new Date('Tue Jun 14 2022 17:48:11 GMT-0400 (Bolivia Time)');

const expectedOutput = {
  format1: '5-14-2022',
  format2: '5/14/2022',
  format3: '14-5-2022',
  format4: '14/5/2022',
};

test('Current date expected format output', () => {
  expect(formatCurrentDate(testDate)).toEqual(expectedOutput);
});
