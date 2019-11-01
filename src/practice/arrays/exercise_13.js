/**
 * Write a function that accepts an array returns a new array
 * with only even numbers. If no even numbers are found 
 * it should return an empty array.
 * 
 * NOTE: use the filter method
 */

const evenNumberFilter = (numbersArray) => {
  const doSomething = (number) => {
    if (number % 2 === 0) {
      return number
    }
  }
  return numbersArray.filter(doSomething)
}

export default evenNumberFilter