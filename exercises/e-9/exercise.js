//9. Write a JavaScript program to calculate days left until next Christmas.

function calcDaysBetweenDates(startDate, endDate) {
  const day1 = new Date(startDate);
  const day2 = new Date(endDate);
  const diferencieTime = day2.getTime() - day1.getTime();
  const diferencieDay = diferencieTime / (1000 * 3600 * 24);
  return Math.round(diferencieDay);
}

console.log(calcDaysBetweenDates('2022-06-29', '2022-12-25'));

module.exports = { calcDaysBetweenDates };
