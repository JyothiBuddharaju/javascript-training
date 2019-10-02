/**
 * Write a function that accepts a list of numbers and
 * transforms each number to n more than the number.
 * It returns a new array of numbers which are n more
 * than the input array numbers
 * 
 * NOTE: use the map method
 */

const addNumberToNumbers = (number, inputArray) => {
  const resultArray = inputArray.map((element) => {
    return number + element
  });
  // console.log(resultArray);
  return resultArray;
}

export default addNumberToNumbers