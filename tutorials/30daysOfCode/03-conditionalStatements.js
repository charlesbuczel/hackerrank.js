//https://www.hackerrank.com/challenges/30-conditional-statements/problem
'use strict';

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

const main = () => {
  const n = parseInt(readLine(), 10);

  console.log(isWeird(n) ? 'Weird' : 'Not Weird');
};

const isWeird = (n) => {
  let result = false;

  if (n % 2 || (n >= 6 && n <= 20)) {
    result = true;
  }

  return result;
}
