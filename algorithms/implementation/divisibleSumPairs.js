//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
const divisibleSumPairs = (n, k, ar) => {
  let pairsCount = 0;
  ar.forEach((element, index) => {
    for (let i = index + 1; i < ar.length; i++) {
      if ((element + ar[i]) % k === 0) {
        pairsCount++;
      }
    }
  });

  return pairsCount;
}
