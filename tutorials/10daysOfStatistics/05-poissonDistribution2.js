//https://www.hackerrank.com/challenges/s10-poisson-distribution-2/problem
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
  const ab = readLine().split(' ');
  const a = parseFloat(ab[0]);
  const b = parseFloat(ab[1]);

  console.log((160 + 40 * (a + a ** 2)).toFixed(3));
  console.log((128 + 40 * (b + b ** 2)).toFixed(3));
};
