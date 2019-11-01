/**
 * Write a function that accepts an array and a separator and
 * returns a string where each item in the array is concatenated 
 * in the string separated by the separator
 * 
 * NOTE: use the join method
 */
// a.join(); // 'Wind,Water,Fire'


const arrayToString = (inputArray, seperator = '') => {
  return inputArray.join(seperator)
}

export default arrayToString