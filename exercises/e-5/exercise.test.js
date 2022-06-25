const { rotateWord } = require('./exercise.js');

test('Rotate Word', () => {
  const word = 'w3resource';
  const expectedOutput = 'w3resource';
  expect(rotateWord(word)).toEqual(expectedOutput);
});
