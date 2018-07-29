/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
const isPositive = (a) => {
  if (a > 0) {
    return 'YES';
  } else if (!a) {
    throw new Error('Zero Error');
  } else {
    throw new Error('Negative Error');
  }
}
