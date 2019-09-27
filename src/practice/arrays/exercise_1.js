/** 
 * Write a function that iterates over an array
 * and returns the count of all even numbers
 * present in the input array.
 * 
 * NOTE: Use the forEach method
 */

const evenNumbersCounter = (numbers) => {
  let counter = 0; // initialise value of counter to 0
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      counter = counter + 1;
    }
  });
  return counter;
}

export default evenNumbersCounter