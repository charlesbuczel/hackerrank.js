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
  const n = parseInt(readLine(), 10);

  
};
