const { calcTrianguleSides } = require('./exercise.js');

test('Return the area of a triangule', () => {
  const sideA = 4;
  const sideB = 5;
  const sideC = 7;
  const expectedOutput = 96;
  expect(calcTrianguleSides(sideA, sideB, sideC)).toBe(expectedOutput);
});
