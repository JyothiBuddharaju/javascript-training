/**
 * Write a function that accepts an array of numbers
 * and checks if all the numbers in the array are even.
 * 
 * NOTE: use the every method
 */

const evenNumbersChecker = (inputArray) => {
  const doSomething = (number) => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  return inputArray.every(doSomething)

}

export default evenNumbersChecker