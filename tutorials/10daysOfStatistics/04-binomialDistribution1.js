//https://www.hackerrank.com/challenges/s10-binomial-distribution-1/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

const readLine = () => inputString[currentLine++];

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", () => {
  inputString = inputString.replace(/\s*$/, '')
      .split('\n')
      .map(str => str.replace(/\s*$/, ''));

  main();
});

const main = () => {
  const ab = readLine().split(' ');
  const a = parseFloat(ab[0]);
  const b = parseFloat(ab[1]);

  const pa = a / (a + b);
  const pb = b / (a + b);

  const n = 6;
  const lowerLimit = 3;
  const upperLimit = 6;

  console.log(cumulativeProbability(lowerLimit, upperLimit, n, pa, pb).toFixed(3));
};

const cumulativeProbability = (lowerLimit, upperLimit, n, pa, pb) => {
  let probability = 0;

  for (let x = lowerLimit; x <= upperLimit; x++) {
    probability += binomialDistribution(n, x, pa, pb);
  }

  return probability;
}

const binomialDistribution = (n, x, pa, pb) => combinations(n, x) * Math.pow(pa, x) * Math.pow(pb, n - x);

const combinations = (n, x) => factorial(n) / (factorial(x) * factorial(n - x));

const factorialCache = [1, 1];
const factorial = (n) => factorialCache[n] ? factorialCache[n] : factorialCache[n] = factorial(n-1) * n;
