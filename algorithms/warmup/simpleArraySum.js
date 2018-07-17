const simpleArraySum = (size, array) => {
  let result = 0;

  for (let index = 0; index < size; index++) {
    result += array[index];
  }

  return result;
};

const main = () => {
  let size = parseInt(readLine());
  let array = readLine().split(' ').map(Number);

  process.stdout.write("" + simpleArraySum(size, array) + "\n");

};
