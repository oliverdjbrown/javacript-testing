//7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

dayOfWeeks = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const findIfDayWas1stJanuary = (startYear, endYear, dayOfWeek) => {
  const yearsFound = [];
  for (let year = startYear; year <= endYear; year++) {
    let testYear = new Date(`${year}-01-01T09:28:26.590Z`);
    if (testYear.getDay() === dayOfWeek) {
      yearsFound.push(testYear.getFullYear());
      console.log(`The 1st of January of ${year} was ${dayOfWeeks[dayOfWeek]}`);
    }
  }
  return yearsFound;
};

findIfDayWas1stJanuary(2014, 2050, 0);

module.exports = { findIfDayWas1stJanuary };
