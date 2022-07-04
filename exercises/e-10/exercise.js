//10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

function multiply() {
  const firstNumber = document.getElementById('firstNumber').value;
  const secondNumber = document.getElementById('secondNumber').value;

  if (validateIsNumber(firstNumber, secondNumber)) {
    document.getElementById('result').innerHTML = firstNumber * secondNumber;
  }
}

function divide() {
  const firstNumber = document.getElementById('firstNumber').value;
  const secondNumber = document.getElementById('secondNumber').value;

  if (validateIsNumber(firstNumber, secondNumber)) {
    document.getElementById('result').innerHTML = firstNumber / secondNumber;
  }
}

function validateIsNumber(firstNumber, secondNumber) {
  return isNaN(firstNumber) || isNaN(secondNumber)
    ? window.alert('Solo se permiten números')
    : true;
}

module.exports = { validateIsNumber };
