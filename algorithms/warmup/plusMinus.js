const plusMinus = (array) => {
  const size = array.length;
  let totalPositive = 0;
  let totalNegative = 0;
  let totalZero = 0;

  for (let value of array) {
    value === 0 && totalZero++;
    value > 0 && totalPositive++;
    value < 0 && totalNegative++;
  }

  return [totalPositive / size, totalNegative / size, totalZero / size]
};

const main = () => {
  const size = parseInt(readLine());
  const array = readLine().split(' ').map(Number);

  const result = plusMinus(array);

  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]);
};
