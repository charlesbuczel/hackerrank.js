const diagonalDifference = (array) => {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    const lastElementIndex = array.length - 1;

    array.forEach((row, index) => {
        firstDiagonal += row[index];
        secondDiagonal += row[lastElementIndex - index];
    });

    return Math.abs(firstDiagonal - secondDiagonal);
};

const main = () => {
    const size = parseInt(readLine());
    const array = [];
    for(let index = 0; index < size; index++){
       array[index] = readLine().split(' ').map(Number);
    }

    console.log(diagonalDifference(array));
};
