const leftRotate = (array, rotation) => {
    let maxIndex = array.length - 1;
    let leftRotatedArray = [];

    for (let index = 0; index < array.length; index++) {
      let newIndex = index + rotation;
      if (newIndex > maxIndex) {
        newIndex -= array.length;
      }
      leftRotatedArray.push(array[newIndex]);
    }

    return leftRotatedArray;
}

const main = () => {
    const n_temp = readLine().split(' ');
    const n = parseInt(n_temp[0]);
    const rotation = parseInt(n_temp[1]);
    const array = readLine().split(' ').map(Number);

    console.log(leftRotate(array, rotation).join(' '));
}
