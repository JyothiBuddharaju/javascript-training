/**
 * Write a function that iterates over a string
 * and returns the count of all vowels numbers
 * present in the input string.
 * 
 * NOTE: Use the forEach method
 */

const vowelsCounter = (inputString) => {
  const newArray = inputString.split('');
  // console.log(newArray);
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  newArray.forEach((element) => {
    if (vowelsArray.includes(element)) {
      counter = counter + 1;
    }
  });
  return counter;
}

export default vowelsCounter