const miniMaxSum = (array) => {
    const result = [0, 0];
    const indexOfMin = array.indexOf(Math.min.apply(null, array));
    const indexOfMax = array.indexOf(Math.max.apply(null, array));

    array.forEach((element, index) => {
        if (index !== indexOfMax) result[0] += element;
        if (index !== indexOfMin) result[1] += element;
    });

    return result;
};

const main = () => {
    array = readLine().split(' ').map(Number);

    console.log(miniMaxSum(array).join(' '));
};
