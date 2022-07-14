//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function convertTemperature() {
  const selectedConvertion = document.getElementById(
    'temperatureSelector'
  ).value;
  const temperature = document.getElementById('temperature').value;

  if (validateIsNumber(temperature)) {
    switch (selectedConvertion) {
      case 'celsiusToFahrenheit':
        document.getElementById('result').value =
          convertToFahrenheit(temperature);
        break;
      case 'fahrenheitToCelsius':
        document.getElementById('result').value = convertToCelsius(temperature);
        break;
    }
  }
}

function convertToCelsius(temperature) {
  return temperature * 1.8 + 32;
}

function convertToFahrenheit(temperature) {
  return temperature - 32 / 1.8;
}

function validateIsNumber(value) {
  return isNaN(value) ? window.alert('Solo se permiten números') : true;
}

module.exports = { convertToCelsius, convertToFahrenheit, validateIsNumber };
