//Declare functionality to be tested
const { printScreen } = require('./exercise.js');

//After spend hours trying to find the best way to test this case I will try the next exercise until I find out how to test print functionalitu
test('Check if print function exits', () => {
  expect(printScreen).toBeTruthy();
});
