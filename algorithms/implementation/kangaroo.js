// https://www.hackerrank.com/challenges/kangaroo/problem
const kangaroo = (x1, v1, x2, v2) => {

  if (x2 > x1 && v2 >= v1) {
    return 'NO';
  }

  if (Number.isInteger((x1 - x2) / (v2 - v1))) {
    return 'YES';
  }

  return 'NO';
}
