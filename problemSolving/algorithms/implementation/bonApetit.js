//https://www.hackerrank.com/challenges/bon-appetit/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = '';
let currentLine = 0;

process.stdin.on("data", function(chunk) {
  input += chunk;
});

process.stdin.on('end', () => {
  input = input.trim().split('\n').map(str => str.trim());

  main();
});

const readLine = () => {
  return input[currentLine++];
}

const calculateBillSplit = (bill, k, b) => {
  const correctSplit = bill.reduce((acc, item, index) => index != k ? acc + item : acc, 0) / 2;

  if (correctSplit === b) {
    return 'Bon Appetit';
  } else {
    return b - correctSplit;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(' ');
  const n = parseInt(nk[0], 10);
  const k = parseInt(nk[1], 10);

  const bill = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

  const b = parseInt(readLine(), 10);

  ws.write(calculateBillSplit(bill, k, b) + "\n");

  ws.end();
}
