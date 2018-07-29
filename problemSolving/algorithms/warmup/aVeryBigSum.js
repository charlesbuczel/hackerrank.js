const aVeryBigSum = (size, array) => array.reduce((result, element) => result + element, 0);

const main = () => {
  const size = parseInt(readLine());
  const array = readLine().split(' ').map(Number);

  process.stdout.write("" + aVeryBigSum(size, array) + "\n");
};
