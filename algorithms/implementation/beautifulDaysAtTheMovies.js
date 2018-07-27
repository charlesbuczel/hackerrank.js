//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

const readLine = () => inputString[currentLine++];

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

const beautifulDays = (i, j, k) => {
  let beautifulDays = 0;

  for (let index = i; index <= j; index++) {
    let reverse = +index.toString().split('').reverse().join('');

    if (Math.abs(index - reverse) % k === 0) {
      beautifulDays++;
    }
  }

  return beautifulDays;
}

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');
    const i = parseInt(ijk[0], 10);
    const j = parseInt(ijk[1], 10);
    const k = parseInt(ijk[2], 10);

    ws.write(beautifulDays(i, j, k) + "\n");
    ws.end();
}
