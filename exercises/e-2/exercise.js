//2. Write a JavaScript program to print the contents of the current window

//declare function that prints screen
function printScreen() {
  return window.print();
}

//export functionality
module.exports = { printScreen };
