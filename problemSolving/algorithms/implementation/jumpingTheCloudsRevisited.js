//https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
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

const jumpingOnClouds = (c, k) => {
 let energy = 100;
 for (let index = 0; index < c.length; index += k) {
   energy -= c[index] ? 3 : 1;
 }

 return energy;
};

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');
    const k = parseInt(nk[1], 10);
    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    ws.write(jumpingOnClouds(c, k) + "\n");
    ws.end();
}
