//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

/*
///Notes: after some research I found this rules///
-The rule states that a year is a leap year when either of the following two rules is met:

-The year is divisible by 400
-That the year is divisible by 4 but not divisible by 100
*/

const checkIfLeapYear = (year) => {
  console.log((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

checkIfLeapYear(2016);
checkIfLeapYear(2022);

module.exports = { checkIfLeapYear };
