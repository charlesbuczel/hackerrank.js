//https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem
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

  const addressBook = new Map();

  for (let index = 0; index < n; index++) {
    const entry = readLine().split(' ');

    addressBook.set(entry[0], entry[1]);
  }

  for (; currentLine < inputString.length;) {
    const entry = readLine();
    const value = addressBook.get(entry);

    if (value) {
      console.log(`${entry}=${value}`);
    } else {
      console.log('Not found');
    }
  }
};
