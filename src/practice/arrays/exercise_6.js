/**
 * Write a function that accepts a list of numbers
 * and returns the sum of all numbers in the list.
 * If there are no numbers then return 0.
 * 
 * NOTE: use the reduce method
 */

const sumOfNumbers = (numbersArray) => {
  // let acc = 0;
  // const doSomething = (number) => {
  //   acc = acc + number
  // }
  // numbersArray.forEach(doSomething);
  // return acc;
  const doSomething = (acc, number) => {
    acc = acc + number
    return acc;
  }
  return numbersArray.reduce(doSomething, 0);
}

export default sumOfNumbers