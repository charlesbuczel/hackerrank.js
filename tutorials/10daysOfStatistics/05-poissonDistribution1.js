//https://www.hackerrank.com/challenges/s10-poisson-distribution-1/problem
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
  const y = parseFloat(readLine());
  const k = parseFloat(readLine());

  console.log(poissonDistribution(y, k).toFixed(3));
};

const poissonDistribution = (y, k) =>
  (Math.pow(y, k) * Math.pow(Math.E, -y)) / factorial(k);

const factorialCache = [1, 1];
const factorial = (n) => factorialCache[n] ?
  factorialCache[n] : factorialCache[n] = factorial(n-1) * n;
