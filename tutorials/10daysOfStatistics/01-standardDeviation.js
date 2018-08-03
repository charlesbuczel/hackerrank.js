//https://www.hackerrank.com/challenges/s10-standard-deviation/problem
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

  x.sort((a, b) => a - b);
  console.log(standardDeviation(x).toFixed(1));
};

const mean = (input) => (input.reduce((sum, element) => sum + element) / input.length);

const standardDeviation = (input) => {
  const m = mean(input);
  const variance = input.reduce((sum, e) => sum + Math.pow(e - m, 2), 0) / input.length;

  return Math.sqrt(variance);
};
