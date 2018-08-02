//https://www.hackerrank.com/challenges/s10-quartiles/problem
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

  const halfPointIndice = Math.floor(x.length / 2);

  console.log(median(x.slice(0, halfPointIndice)));
  console.log(median(x));
  console.log(median(x.slice(x.length % 2 ? halfPointIndice + 1 : halfPointIndice)));
};

const median = (input) => {
  let median = input.length % 2 ?
    input[Math.floor(input.length / 2)] :
    (input[input.length / 2] + input[(input.length / 2) - 1]) / 2;

  return median;
};
