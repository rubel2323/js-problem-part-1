// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longWord(sentence) {
  const sentInv = sentence.split(" ");

  let senLen = sentInv[0];

  for (let i = 0; i < sentInv.length; i++) {
    if (sentInv[i].length > senLen.length) {
      senLen = sentInv[i];
    }
  }
  //   console.log(sentInv[3].length);
  return `So, the longest word in "${sentence}" is ${senLen}`;
}

const srt = longWord("I am Learning Programming to become a programmer");
console.log(srt);
