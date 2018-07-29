/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
const getSecondLargest = (nums) => {
    let largest = nums[0];
    let secondLargest = nums[0];

    nums.forEach(num => {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      }
    });

    return secondLargest;
}
