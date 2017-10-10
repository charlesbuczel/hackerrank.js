const birthdayCakeCandles = (array) => {
    const maxHeight = Math.max.apply(null, array);

    return array.filter((candleHeight) => candleHeight === maxHeight).length;
};

const main = () => {
    const n = parseInt(readLine());
    const array = readLine().split(' ').map(Number);

    console.log(birthdayCakeCandles(array));
};
