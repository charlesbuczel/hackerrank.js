//https://www.hackerrank.com/challenges/30-binary-numbers/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

const readLine = () => inputString[currentLine++];

process.stdin.on('data', (inputStdin) => {
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
  let n = parseInt(readLine(), 10);
  const binary = [];
  let remainder;
  let max = 0;
  let current = 0;

  while (n > 0) {
    remainder = n % 2;
    n = Math.floor(n / 2);
    if (remainder) {
      current++;
      max = current > max ? current : max;
    } else {
      current = 0;
    }
  }

  console.log(max);
};
