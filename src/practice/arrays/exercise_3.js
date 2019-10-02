/**
 * Write a function that accepts a list of strings
 * and transforms each string to uppercase and returns
 * a new array of all uppercase strings.
 * 
 * NOTE: Use the map method
 */

const uppercaseStrings = (inputArray) => {
  const newArray = inputArray.map((eachString) => {
    return eachString.toUpperCase();
  })
  // console.log(newArray);
  return (newArray);
}

export default uppercaseStrings