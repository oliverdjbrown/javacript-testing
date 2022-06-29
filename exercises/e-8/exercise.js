//8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is
//then prompted to input a guess number. If the user input matches with guess number,
//the program will display a message "Good Work" otherwise display a message "Not matched".

function guessNumber() {
  const randomNumber = generateRandomNumber(1, 10);
  const userInput = prompt('Write a number between 1 to 10');
  const convertInputToNumber = Number(userInput);
  validations(convertInputToNumber);

  if (convertInputToNumber === randomNumber) {
    return alert(`Good Work the random number was ${randomNumber}`);
  } else {
    return convertInputToNumber != 0
      ? alert(`Not Matched the random number was ${randomNumber}`)
      : null;
  }
}

function validations(userInput) {
  if (typeof userInput !== 'number') {
    return typeof window !== 'undefined'
      ? alert('the character must be a number')
      : 'the character must be a number';
  }

  if (userInput <= 0) {
    return typeof window !== 'undefined'
      ? alert('the number cannot be lower or equal to zero')
      : 'the number cannot be lower or equal to zero';
  }

  if (userInput > 10) {
    return typeof window !== 'undefined'
      ? alert('the number cannot be bigger than 10')
      : 'the number cannot be bigger than 10';
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = { validations };
