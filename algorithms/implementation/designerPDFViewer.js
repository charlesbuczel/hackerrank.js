//https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
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

const designerPdfViewer = (h, word) => {
  let maxHeight = 0;
  word.split('').forEach((l) => {
    let height = h[l.charCodeAt() - 'a'.charCodeAt()];
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  return word.length * maxHeight;
};

const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));
    const word = readLine();

    ws.write(designerPdfViewer(h, word) + "\n");
    ws.end();
};
