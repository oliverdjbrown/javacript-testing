/*
3. Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const currentDate = new Date();

function formatCurrentDate(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const dateObj = {
    format1: `${month}-${day}-${year}`,
    format2: `${month}/${day}/${year}`,
    format3: `${day}-${month}-${year}`,
    format4: `${day}/${month}/${year}`,
  };
  return dateObj;
}

console.log(formatCurrentDate(currentDate));

module.exports = { formatCurrentDate };
