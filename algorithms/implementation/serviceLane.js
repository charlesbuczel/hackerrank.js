//https://www.hackerrank.com/challenges/service-lane/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

const readLine = () => inputString[currentLine++];

const serviceLane = (width, cases) => cases
  .map(c => Math.min.apply(Math, width.slice(c[0], c[1] + 1))); 

const main = () => {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nt = readLine().split(' ');
  const t = parseInt(nt[1], 10);

  const width = readLine().split(' ').map(widthTemp => parseInt(widthTemp, 10));

  const cases = Array(t);

  for (let i = 0; i < t; i++) {
    cases[i] = readLine().split(' ').map(casesTemp => parseInt(casesTemp, 10));
  }

  ws.write(serviceLane(width, cases).join("\n") + "\n");

  ws.end();
}
