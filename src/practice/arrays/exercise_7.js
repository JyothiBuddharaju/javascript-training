/**
 * Write a function that accepts a list of numbers
 * and returns the largest number in the list.
 * If there are no numbers then return 0.
 * 
 * NOTE: use the reduce method
 */

const largestNumber = (numbersArray) => {
  const doSomething = (acc, number) => {
    if (number >= 5) {
      return number;
    }
  }
  return numbersArray.reduce(doSomething, 0)
}

export default largestNumber