// https://www.hackerrank.com/challenges/apple-and-orange/problem
const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let applesCount = 0;
  let orangesCount = 0;

  const landedOnHouse = (absolutePosition) => absolutePosition >= s && absolutePosition <= t;

  apples.forEach(apple => landedOnHouse(a + apple) && applesCount++);
  oranges.forEach(orange => landedOnHouse(b + orange) && orangesCount++);

  console.log(applesCount);
  console.log(orangesCount);
}
