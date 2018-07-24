//https://www.hackerrank.com/challenges/the-hurdle-race/problem
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

const hurdleRace = (k, height) => {
  const highest = Math.max.apply(Math, height);

  return highest > k ? highest - k : 0;
};

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');
    const k = parseInt(nk[1], 10);
    const height = readLine().split(' ').map(heightTemp => parseInt(heightTemp, 10));

    ws.write(hurdleRace(k, height); + "\n");
    ws.end();
};
