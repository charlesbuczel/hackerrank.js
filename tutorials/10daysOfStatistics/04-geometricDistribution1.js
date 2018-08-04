//https://www.hackerrank.com/challenges/s10-geometric-distribution-1/problem
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
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

const main = () => {
  const ab = readLine().split(' ');
  const a = parseInt(ab[0], 10);
  const b = parseInt(ab[1], 10);

  const p = a / b

  const n = parseInt(readLine(), 10);

  console.log(geometricDistribution(n, p).toFixed(3));
};

const geometricDistribution = (n, p) => Math.pow(1 - p, n - 1) * p;
