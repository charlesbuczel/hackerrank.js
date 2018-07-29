//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
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

const jumpingOnClouds = (c) => {
  let movesCount = 0;

  for (let cloud = 0; cloud < c.length - 1;) {
    cloud += c[cloud + 2] === 0 ? 2 : 1;
    movesCount++;
  }

  return movesCount;
}

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);
    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    ws.write(jumpingOnClouds(c) + "\n");
    ws.end();
}
