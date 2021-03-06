//https://www.hackerrank.com/challenges/s10-normal-distribution-2/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

const readLine = () => inputString[currentLine++];

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

const main = () => {
  const meanSd = readLine().split(' ');
  const mean = parseInt(meanSd[0], 10);
  const sd = parseInt(meanSd[1], 10);
  const a = parseFloat(readLine());
  const b = parseFloat(readLine());

  const distA = normalDistribution(a, mean, sd);
  const distB = normalDistribution(b, mean, sd);

  console.log(((1 - distA) * 100).toFixed(2));
  console.log(((1 - distB) * 100).toFixed(2));
  console.log((distB * 100).toFixed(2));
};

//https://www.johndcook.com/blog/2009/01/19/stand-alone-error-function-erf/
const erf = (z) => {
  const a1 =  0.254829592;
  const a2 = -0.284496736;
  const a3 =  1.421413741;
  const a4 = -1.453152027;
  const a5 =  1.061405429;
  const p  =  0.3275911;

  let t = 1.0 / (1.0 + p * Math.abs(z));
  let y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);

  return z >= 0 ? y : -y;
};

const normalDistribution = (x, mean, sd) =>
  0.5 * (1 + erf((x - mean) / (sd * Math.sqrt(2))));
