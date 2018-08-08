//https://www.hackerrank.com/challenges/30-recursion/problem
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
  const n = parseInt(readLine(), 10);

  console.log(factorial(n));
};

const factorialCache = [1, 1];
const factorial = (n) => factorialCache[n] ?
  factorialCache[n] : factorialCache[n] = factorial(n-1) * n;
