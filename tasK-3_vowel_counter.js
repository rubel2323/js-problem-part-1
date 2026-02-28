// Task-3:
// Write a function to count the number of vowels in a string.

function vowelCounter(srt) {
  const vowels = ["a", "i", "o", "e", "u"];

  let wordInvert = srt.split("");

  console.log(wordInvert);
  let count = 0;
  for (let i = 0; i < wordInvert.length; i++) {
    if (vowels.includes(wordInvert[i])) {
      count++;
    }
  }
  return `So, the number of vowels in "${srt}" is ${count}`;
}
let sentence = vowelCounter("i am nothing but a man");
console.log(sentence);
