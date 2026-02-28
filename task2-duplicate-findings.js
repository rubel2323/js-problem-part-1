// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function repeatArray(numbers, matchingNum) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == matchingNum) {
      count++;
    }
  }
  return `The matching number is ${matchingNum} and it has found ${count} times`;
}
const valueGiven = repeatArray([5, 6, 11, 12, 98, 5], 5);
console.log(valueGiven);
