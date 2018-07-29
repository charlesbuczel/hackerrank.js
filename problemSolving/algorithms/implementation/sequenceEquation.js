//https://www.hackerrank.com/challenges/permutation-equation/problem
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

const permutationEquation = (p) => {
  let permutations = [];

  for (let index = 0; index < p.length; index++) {
    let pX = p.indexOf(index + 1) + 1;
    permutations.push(p.indexOf(pX) + 1);
  }

  return permutations;
}

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);
    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    ws.write(permutationEquation(p).join("\n") + "\n");
    ws.end();
}
