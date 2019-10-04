/**
 * Write a function that accepts an array and determines 
 * if it contains a string item longer than 5 characters 
 * 
 * NOTE: use the some method
 */

const stringLengthChecker = (inputArray) => {
  const result = inputArray.some((string) => {
    if (string.length > 5) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}

export default stringLengthChecker