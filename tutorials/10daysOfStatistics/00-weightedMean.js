//https://www.hackerrank.com/challenges/s10-basic-statistics/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

const readLine = () => inputString[currentLine++];

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", () => {
  inputString = inputString.replace(/\s*$/, '')
      .split('\n')
      .map(str => str.replace(/\s*$/, ''));

  main();
});

const main = () => {
  const n = parseInt(readLine(), 10);
  const x = readLine().split(' ').map(element => parseInt(element, 10));
  const w = readLine().split(' ').map(element => parseInt(element, 10));

  console.log(mean(x, w).toFixed(1));
};

const mean = (x, w) =>
  x.reduce((sum, e, i) => sum + (e * w[i]), 0) /
  w.reduce((sum, e) => sum + e);
