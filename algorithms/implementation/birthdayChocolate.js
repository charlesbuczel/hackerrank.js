//https://www.hackerrank.com/challenges/the-birthday-bar/problem
const solve = (s, d, m) => {
  let possiblePortions = 0;

  s.forEach((piece, index) => {
    if ((index + m) <= s.length) {
      if (s.slice(index, index + m).reduce((acc, val) => acc + val) === d) {
        possiblePortions++;
      }
    }
  });

  return possiblePortions;
}
