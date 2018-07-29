//https://www.hackerrank.com/challenges/minimum-distances/problem
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

const minimumDistances = (a) =>  {
  const uniqueA = a.filter((value, index, self) => self.indexOf(value) === index);
  let minimumDistance = -1;

  uniqueA.forEach(element => {
    let i = a.indexOf(element);
    let j = a.indexOf(element, i + 1);

    if (j !== -1) {
      let distance = j - i;
      if (distance < minimumDistance || minimumDistance === -1) {
        minimumDistance = distance;
      }
    }
  });

  return minimumDistance;
}

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);
    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    ws.write(minimumDistances(a) + "\n");
    ws.end();
}
