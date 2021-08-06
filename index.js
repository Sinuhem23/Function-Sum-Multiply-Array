// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
/////////////////////////////////////////////////////////////////
var prompt = require('prompt-sync')();
var user_input1 = Number(prompt('Enter first number: '));
var user_input2 = Number(prompt('Enter second number: '));
var user_input3 = Number(prompt('Enter third number: '));
var user_input4 = Number(prompt('Enter fourth number: '));
numbers = [];
numbers.push(user_input1);
numbers.push(user_input2);
numbers.push(user_input3);
numbers.push(user_input4);

// Set addition
sum = numbers => {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

// Set multiplication
multiply = numbers => {
  var total = 1;
  for (var i = 0; i < numbers.length; i++) {
    total = total * numbers[i];
  }
  return total;
};
// Print out the total to the console
console.log(sum(numbers));

console.log(multiply(numbers));
