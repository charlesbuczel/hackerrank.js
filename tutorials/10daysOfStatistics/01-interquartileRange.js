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
  const elements = readLine().split(' ').map(element => parseInt(element, 10));
  const frequencies = readLine().split(' ').map(element => parseInt(element, 10));

  const x = elements.reduce(
    (arr, element, index) => arr.concat(Array(frequencies[index]).fill(element)),
    []
  );

  x.sort((a, b) => a - b);

  const halfPointIndice = Math.floor(x.length / 2);

  let q1 = median(x.slice(0, halfPointIndice));
  let q3 = median(x.slice(x.length % 2 ? halfPointIndice + 1 : halfPointIndice));

  console.log((q3 - q1).toFixed(1));
};

const median = (input) => {
  let median = input.length % 2 ?
    input[Math.floor(input.length / 2)] :
    (input[input.length / 2] + input[(input.length / 2) - 1]) / 2;

  return median;
};
