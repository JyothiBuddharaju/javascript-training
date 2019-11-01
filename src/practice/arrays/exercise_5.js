/**
 * Write a function that accepts a list of numbers and
 * transforms each number to n more than the number.
 * It returns a new array of numbers which are n more
 * than the input array numbers
 * 
 * NOTE: use the map method
 */

const addNumberToNumbers = (n, numbersArray) => {
  const doSomething = (number) => {
    return n + number;
  }
  return numbersArray.map(doSomething)
}

export default addNumberToNumbers