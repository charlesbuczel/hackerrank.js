//https://www.hackerrank.com/challenges/sock-merchant/problem
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


const sockMerchant = (socks) => {
  const socksCatalogue = socks.reduce((socksByColor, sock) => {
    socksByColor[sock] = socksByColor[sock] ? ++socksByColor[sock] : 1;

    return socksByColor;
  }, {});

  return Object.values(socksCatalogue)
    .reduce(
      (matchingSocks, sockTypeCount) => matchingSocks + Math.floor(sockTypeCount / 2),
      0
    );
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);
  const socks = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

  ws.write(sockMerchant(socks) + '\n');

  ws.end();
}
