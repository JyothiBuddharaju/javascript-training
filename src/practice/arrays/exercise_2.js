/**
 * Write a function that iterates over a string
 * and returns the count of all vowels numbers
 * present in the input string.
 * 
 * NOTE: Use the forEach method
 */

const vowelsCounter = (inputString) => {
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  const letters = inputString.split('');
  let counter = 0;
  const doSomething = (letter) => {
    if (vowelsArray.includes(letter)) {
      counter = counter + 1;
    }
  }
  letters.forEach(doSomething)
  return counter;
}

export default vowelsCounter