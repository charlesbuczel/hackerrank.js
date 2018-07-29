/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
const reverseString = (s) => {
  try {
    s = s.split('').reverse().join('');
  } catch (e) {
    console.log(e.message);
  }

  return s;
}
