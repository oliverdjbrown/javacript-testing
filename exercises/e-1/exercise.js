//1. Write a JavaScript program to display the current day and time in the following format.
//Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

//storage current date in a variable
const date = new Date();

//Get current day from date
const today = date.getDay();

//An object to get the day of the week  by the key value
const week = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

//Function to extract a formatted time from date
function extractTime(dateParam) {
  const date = new Date(dateParam);

  return `${date.toLocaleTimeString().slice(0, 2)} ${
    date.getHours() > 12 ? 'PM' : 'AM'
  } : ${date.getMinutes()} : ${date.getSeconds()}`;
}

//print day of the week
console.log(`Today is: ${week[today]}`);
console.log(`Current time is: ${extractTime(date)}`);

//export the functionality that I will test in the test file
module.exports = { week, extractTime };
