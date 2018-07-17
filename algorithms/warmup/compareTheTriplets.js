const solve = (a0, a1, a2, b0, b1, b2) => {
  const results = [0, 0];
  const alice = [a0, a1, a2];
  const bob = [b0, b1, b2];

  alice.forEach((aliceRating, index) => {
    const bobRating = bob[index];

    aliceRating > bobRating && results[0]++;
    bobRating > aliceRating && results[1]++;
  });

  return results;
};

const main = () => {
  let a0_temp = readLine().split(' ');
  let a0 = parseInt(a0_temp[0]);
  let a1 = parseInt(a0_temp[1]);
  let a2 = parseInt(a0_temp[2]);
  let b0_temp = readLine().split(' ');
  let b0 = parseInt(b0_temp[0]);
  let b1 = parseInt(b0_temp[1]);
  let b2 = parseInt(b0_temp[2]);

  console.log(solve(a0, a1, a2, b0, b1, b2).join(" "));
};
