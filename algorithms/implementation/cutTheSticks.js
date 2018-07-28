//https://www.hackerrank.com/challenges/cut-the-sticks/problem
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

const cutTheSticks = (arr) => {
  const sticksRemaining = [];

  arr.sort();

  while (arr.length !== 0) {
    sticksRemaining.push(arr.length);

    let stickToRemove = arr[0];
    while (arr[0] === stickToRemove) {
      arr.shift();
    }
  }

  return sticksRemaining;
}

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    ws.write(cutTheSticks(arr).join("\n") + "\n");
    ws.end();
}
