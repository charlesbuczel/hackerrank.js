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

const solve = (mealCost, tipPercent, taxPercent) =>
  Math.round(mealCost + (tipPercent / 100 * mealCost) + (taxPercent / 100 * mealCost));

const main = () => {
    const mealCost = parseFloat(readLine());
    const tipPercent = parseInt(readLine(), 10);
    const taxPercent = parseInt(readLine(), 10);

    console.log(`The total meal cost is ${solve(mealCost, tipPercent, taxPercent)} dollars.`);
};
