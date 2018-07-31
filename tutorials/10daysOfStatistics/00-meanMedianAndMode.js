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
  const input = readLine().split(' ').map(element => parseInt(element, 10));

  console.log(mean(input));
  console.log(median(input));
  console.log(mode(input));
};

const mean = (input) => (input.reduce((sum, element) => sum + element) / input.length).toFixed(1);

const median = (input) => {
  input.sort((a, b) => a - b);

  let median = input.length % 2 ?
    input[Math.ceil(input.length / 2)] :
    (input[input.length / 2] + input[(input.length / 2) - 1]) / 2;

  return median.toFixed(1);
};

const mode = (input) => {
  const frequencies = {};
  let maxFequencies = 1;
  let mode;

  input.sort((a, b) => a - b);

  input.forEach(e => {
    frequencies[e] = frequencies[e] ? frequencies[e] + 1 : 1;
    if (frequencies[e] > maxFequencies) {
      maxFequencies = frequencies[e];
    }
  });

  for (let i = 0; i < input.length; i++) {
    if (frequencies[input[i]] === maxFequencies) {
      mode = input[i];
      break;
    }
  }

  return mode;
};
