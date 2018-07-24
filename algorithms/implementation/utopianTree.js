//https://www.hackerrank.com/challenges/utopian-tree/problem
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

const utopianTree = (n) => {
  let height = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2) {
      height *= 2;
    } else {
      height += 1;
    }
  }

  return height;
};

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        ws.write(utopianTree(n) + "\n");
    }

    ws.end();
};
