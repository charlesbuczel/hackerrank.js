//https://www.hackerrank.com/challenges/strange-advertising/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

const readLine = () => inputString[currentLine++];

const viralAdvertising = (n) => {
  let cumulative = 2;
  let liked = 2;

  for (let i = 1; i < n; i++) {
    liked = Math.floor((liked * 3) / 2);
    cumulative += liked;
  }

  return cumulative;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  ws.write(viralAdvertising(n) + '\n');

  ws.end();
}
