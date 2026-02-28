// You are given an array of numbers. Find the largest number in the array.

// sample-input: numbers = [5, 6, 11, 12, 98, 5]

// output: 98

// sample-input: numbers = [100, 23, 47, 3, 67]

// output: 100

function findLargest(numbers) {
  // your code here
  let largesNum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largesNum) {
      largesNum = numbers[i];
    }
  }
  return largesNum;
}

const result = findLargest([-1, -2, -3, 0, -7, -390]);
console.log(result);
