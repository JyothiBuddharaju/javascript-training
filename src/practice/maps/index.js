/**
 * Challenges on the map method of Array
 * To run tests type:
 * npm run test:watch
 * then press p for pattern search
 * and enter 'maps'
 * This should run only the map tests
 */

/**
 * #### 1 ####
 * 
 * Write a function that accepts a list of strings
 * and transforms each string to uppercase.
 * 
 * NOTE: call the function uppercaseStrings
 */

export const uppercaseStrings = (lowercaseStrings) => {
    const uppercaseArray = lowercaseStrings.map((eachlowercaseString) => {
        return eachlowercaseString.toUpperCase();
})  
// console.log(uppercaseArray);
return uppercaseArray; 
}


/**
 * #### 2 ####
 * 
 * Write a function that accepts a list of numbers
 * and transforms each number to its square.
 * A square number is the product of the 
 * number with itself.
 * 
 * NOTE: call the function squareNumbers
 */

export const squareNumbers = (numbers) => {
  const inputArray = numbers.map((number) => {
      return number*number;
  })
  //  console.log(inputArray);
 return inputArray;
}

/**
 * #### 3 ####
 * 
 * Write a function that accepts a list of numbers and
 * transforms each number to n more than the number.
 * n is the input to the function along with the array
 * 
 * NOTE: call the function addNumberToNumbers
 */

export const addNumberToNumbers = (n,numbers) => {
  const resultArray = numbers.map((number) => {
   return number+n;
  })
  // console.log(resultArray)
 return resultArray;
}
