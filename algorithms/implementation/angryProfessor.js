//https://www.hackerrank.com/challenges/angry-professor/problem
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

const angryProfessor = (k, a) => a.filter(arrivalTime => arrivalTime <= 0).length >= k ?
  'NO' : 'YES';

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');
        const k = parseInt(nk[1], 10);
        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

        ws.write(angryProfessor(k, a) + "\n");
    }

    ws.end();
}
