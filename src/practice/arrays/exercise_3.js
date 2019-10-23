/**
 * Write a function that accepts a list of strings
 * and transforms each string to uppercase and returns
 * a new array of all uppercase strings.
 * 
 * NOTE: Use the map method
 */

const uppercaseStrings = (inputArray) => {
  const doSomething = (eachString) => {
    return eachString.toUpperCase();
  }
  return inputArray.map(doSomething)
}


export default uppercaseStrings