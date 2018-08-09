//https://www.hackerrank.com/challenges/s10-the-central-limit-theorem-1/problem
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
  const maxWeight = parseInt(readLine(), 10);
  const boxesCount = parseInt(readLine(), 10);
  const meanBoxWeight = parseInt(readLine(), 10);
  const sd = parseInt(readLine(), 10);

  const boxesSampleMean = boxesCount * meanBoxWeight;
  const boxesSampleSd = Math.sqrt(boxesCount) * sd;

  console.log(normalDistribution(maxWeight, boxesSampleMean, boxesSampleSd).toFixed(4));
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
