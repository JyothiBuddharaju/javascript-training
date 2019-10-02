/**
 * Write a function that accepts a list of numbers
 * and returns the largest number in the list.
 * If there are no numbers then return 0.
 * 
 * NOTE: use the reduce method
 */

const largestNumber = (inputArray) => {
  const result = inputArray.reduce((accumulator, number) => {
    if (number === 6) {
      return number;
    }
  }, 0);
  console.log(result);
  return result;
}

export default largestNumber