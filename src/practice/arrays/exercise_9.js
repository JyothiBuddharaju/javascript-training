/**
 * Write a function that accepts an array and determines 
 * if it contains a string item longer than 5 characters 
 * 
 * NOTE: use the some method
 */

const stringLengthChecker = (inputArray) => {
  const doSomething = (eachItem) => {
    if (eachItem.length > 5) {
      return true
    }
  }
  return inputArray.some(doSomething)
}

export default stringLengthChecker