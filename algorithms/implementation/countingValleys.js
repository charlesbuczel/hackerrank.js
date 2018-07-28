//https://www.hackerrank.com/challenges/counting-valleys/problem
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

const countingValleys = (s) => {
  const STEP_UP = 'U';
  let height = 0;
  let valleys = 0;

  for (let step = 0; step < s.length; step++) {
    if (s[step] === STEP_UP) {
      if (height === -1) {
        valleys++;
      }
      height++;
    } else {
      height--;
    }
  }

  return valleys;
}

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);
    const s = readLine();

    ws.write(countingValleys(s) + "\n");
    ws.end();
}
