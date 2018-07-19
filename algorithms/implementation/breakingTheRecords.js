//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
const breakingRecords = (scores) => {
  const recordsCount = [0, 0];
  let min = scores[0];
  let max = scores[0];

  scores.forEach(score => {
    if (score > max) {
      recordsCount[0]++;
      max = score;
    }

    if (score < min) {
      recordsCount[1]++;
      min = score;
    }
  });

  return recordsCount;
}
