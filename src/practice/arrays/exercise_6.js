/**
 * Write a function that accepts a list of numbers
 * and returns the sum of all numbers in the list.
 * If there are no numbers then return 0.
 * 
 * NOTE: use the reduce method
 */

const sumOfNumbers = (inputArray) => {
  const result = inputArray.reduce((accumulator, value) => {
    return accumulator + value
  }, 0);
  return result;
}
export default sumOfNumbers