//https://www.hackerrank.com/challenges/30-review-loop/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
const readLine = () => inputString[currentLine++];

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

const main = () => {
  const n = parseInt(readLine(), 10);

  for (let index = 0; index < n; index++) {
    let s = readLine();

    console.log(splitOddEven(s));
  }
};

const splitOddEven = (s) => {
  let odd = '';
  let even = '';

  for (let index = 0; index < s.length; index++) {
    let c = s[index];

    if ((index + 1) % 2) {
      odd += c;
    } else {
      even += c;
    }
  }

  return `${odd} ${even}`;
};
