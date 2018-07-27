//https://www.hackerrank.com/challenges/find-digits/problem
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

const findDigits = (n) => n
  .toString()
  .split('')
  .reduce((acc, d) => ((+d) !== 0) && (n % (+d) === 0) ? acc + 1 : acc, 0);

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        ws.write(findDigits(n) + "\n");
    }

    ws.end();
}
